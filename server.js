const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const https = require('https');
const { Redis } = require('@upstash/redis');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// --- Data ---
const animals = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/animals.json'), 'utf8'));
const VALID_USERS = ['elliot', 'ria', 'elliotandria'];
const tokenMap = {}; // token -> username (in-memory, survives within a single instance)

// --- Redis (Upstash) ---
const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

// Helper: get user data from Redis
async function getUser(username) {
  const data = await redis.get(`user:${username}`);
  if (data) return data;
  // Initialize new user
  const initial = { discoveredAnimals: [], days: {} };
  await redis.set(`user:${username}`, JSON.stringify(initial));
  return initial;
}

// Helper: save user data to Redis
async function saveUser(username, userData) {
  await redis.set(`user:${username}`, JSON.stringify(userData));
}

// --- Image Proxy (avoids Wikimedia hotlink/rate-limit issues) ---
const imageCache = new Map();

app.get('/api/image/:animalId', (req, res) => {
  const animal = animals.find(a => a.id === req.params.animalId);
  if (!animal) return res.status(404).send('Not found');

  if (imageCache.has(animal.id)) {
    const cached = imageCache.get(animal.id);
    res.set('Content-Type', cached.contentType);
    res.set('Cache-Control', 'public, max-age=86400');
    return res.send(cached.data);
  }

  const fetchUrl = (url, redirects = 0) => {
    if (redirects > 5) return res.status(502).send('Too many redirects');
    https.get(url, {
      headers: { 'User-Agent': 'AnimalOTD/1.0 (Educational project)' }
    }, (proxyRes) => {
      if (proxyRes.statusCode >= 300 && proxyRes.statusCode < 400 && proxyRes.headers.location) {
        return fetchUrl(proxyRes.headers.location, redirects + 1);
      }
      if (proxyRes.statusCode !== 200) {
        return res.status(proxyRes.statusCode).send('Image fetch failed');
      }
      const chunks = [];
      proxyRes.on('data', chunk => chunks.push(chunk));
      proxyRes.on('end', () => {
        const data = Buffer.concat(chunks);
        const contentType = proxyRes.headers['content-type'] || 'image/jpeg';
        imageCache.set(animal.id, { data, contentType });
        res.set('Content-Type', contentType);
        res.set('Cache-Control', 'public, max-age=86400');
        res.send(data);
      });
    }).on('error', () => res.status(502).send('Image fetch failed'));
  };

  fetchUrl(animal.image);
});

// --- Seeded PRNG ---
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function shuffle(arr, rng) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// --- Day Algorithm ---
function getTodayString() {
  return new Date().toISOString().slice(0, 10);
}

function getAnimalsForDay(username, dateStr, discoveredIds) {
  const pool = animals.filter(a => !discoveredIds.includes(a.id));

  if (pool.length === 0) {
    return { animals: [], revealed: [], completedAt: null, exhausted: true };
  }

  if (pool.length < 3) {
    return { animals: pool.map(a => a.id), revealed: [], completedAt: null, exhausted: false };
  }

  const seed = hashString(username + ':' + dateStr);
  const rng = mulberry32(seed);
  const shuffled = shuffle(pool, rng);
  const selected = shuffled.slice(0, 3).map(a => a.id);

  return { animals: selected, revealed: [], completedAt: null };
}

// --- Auth Middleware ---
function auth(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const token = header.slice(7);
  const username = tokenMap[token];
  if (!username) {
    return res.status(401).json({ error: 'Invalid token' });
  }
  req.username = username;
  next();
}

// --- API Routes ---

// Login
app.post('/api/login', (req, res) => {
  const { passcode } = req.body;
  if (!passcode) return res.status(400).json({ error: 'Passcode required' });

  if (VALID_USERS.includes(passcode)) {
    const username = passcode;
    const token = crypto.randomBytes(16).toString('hex');
    tokenMap[token] = username;
    return res.json({ username, token });
  }
  return res.status(401).json({ error: 'Invalid passcode' });
});

// Get today's animals
app.get('/api/today', auth, async (req, res) => {
  try {
    const dateStr = getTodayString();
    const user = await getUser(req.username);

    // If day already assigned, return it
    if (user.days[dateStr]) {
      const dayData = user.days[dateStr];
      const animalCards = dayData.animals.map(id => {
        const isRevealed = dayData.revealed.includes(id);
        const animal = animals.find(a => a.id === id);
        if (isRevealed && animal) {
          return { id, revealed: true, name: animal.name, emoji: animal.emoji, color: animal.color, image: animal.image, facts: animal.facts, videoUrl: animal.videoUrl, videoType: animal.videoType };
        }
        return { id, revealed: false };
      });
      const completed = dayData.completedAt !== null;
      return res.json({ date: dateStr, animals: animalCards, completed, exhausted: false });
    }

    // Compute new day
    const dayData = getAnimalsForDay(req.username, dateStr, user.discoveredAnimals);

    if (dayData.exhausted) {
      return res.json({ date: dateStr, animals: [], completed: true, exhausted: true });
    }

    // Save day assignment
    user.days[dateStr] = dayData;
    await saveUser(req.username, user);

    const animalCards = dayData.animals.map(id => ({ id, revealed: false }));
    res.json({ date: dateStr, animals: animalCards, completed: false, exhausted: false });
  } catch (e) {
    console.error('Error in /api/today:', e);
    res.status(500).json({ error: 'Server error' });
  }
});

// Reveal an animal
app.post('/api/reveal', auth, async (req, res) => {
  try {
    const { animalId } = req.body;
    if (!animalId) return res.status(400).json({ error: 'animalId required' });

    const dateStr = getTodayString();
    const user = await getUser(req.username);
    const dayData = user.days[dateStr];

    if (!dayData) return res.status(400).json({ error: 'No animals assigned today' });
    if (!dayData.animals.includes(animalId)) return res.status(400).json({ error: 'Animal not assigned today' });
    if (dayData.revealed.includes(animalId)) {
      const animal = animals.find(a => a.id === animalId);
      return res.json({ animal, alreadyRevealed: true });
    }
    if (dayData.completedAt) return res.status(400).json({ error: 'Day already completed' });

    // Reveal the animal
    dayData.revealed.push(animalId);
    if (!user.discoveredAnimals.includes(animalId)) {
      user.discoveredAnimals.push(animalId);
    }

    // Check if day is complete
    if (dayData.revealed.length >= dayData.animals.length) {
      dayData.completedAt = new Date().toISOString();
    }

    await saveUser(req.username, user);

    const animal = animals.find(a => a.id === animalId);
    res.json({ animal, completed: dayData.completedAt !== null });
  } catch (e) {
    console.error('Error in /api/reveal:', e);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get zoo animals
app.get('/api/zoo', auth, async (req, res) => {
  try {
    const user = await getUser(req.username);
    const zooAnimals = user.discoveredAnimals.map(id => {
      const animal = animals.find(a => a.id === id);
      if (!animal) return null;
      return {
        id: animal.id,
        name: animal.name,
        emoji: animal.emoji,
        color: animal.color,
        image: animal.image,
        facts: animal.facts,
        videoUrl: animal.videoUrl,
        videoType: animal.videoType
      };
    }).filter(Boolean);

    res.json({ animals: zooAnimals, total: animals.length });
  } catch (e) {
    console.error('Error in /api/zoo:', e);
    res.status(500).json({ error: 'Server error' });
  }
});

// Catch-all: serve index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start server (skipped when imported by Vercel)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Animal OTD running at http://localhost:${PORT}`);
  });
}

module.exports = app;
