const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const https = require('https');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// --- Data ---
const animals = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/animals.json'), 'utf8'));
const VALID_USERS = { elliot: 'elliot', ria: 'ria', elliotandria: 'elliotandria' };
const tokenMap = {}; // token -> username (in-memory)

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

// --- Day Algorithm (stateless — client sends discovered list) ---
function getTodayString() {
  return new Date().toISOString().slice(0, 10);
}

function getAnimalsForDay(username, dateStr, discoveredIds) {
  // Build pool of undiscovered animals
  const pool = animals.filter(a => !discoveredIds.includes(a.id));

  if (pool.length < 3) {
    return { animals: pool.map(a => a.id), revealed: [], completedAt: null, exhausted: pool.length === 0 };
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

  for (const [username, pass] of Object.entries(VALID_USERS)) {
    if (pass === passcode) {
      const token = crypto.randomBytes(16).toString('hex');
      tokenMap[token] = username;
      return res.json({ username, token });
    }
  }
  return res.status(401).json({ error: 'Invalid passcode' });
});

// Get today's animals (client sends its discovered list)
app.post('/api/today', auth, (req, res) => {
  const dateStr = getTodayString();
  const discoveredIds = req.body.discoveredIds || [];
  const revealedToday = req.body.revealedToday || [];

  // Validate discoveredIds — only allow known animal IDs
  const validDiscovered = discoveredIds.filter(id => animals.find(a => a.id === id));

  const dayData = getAnimalsForDay(req.username, dateStr, validDiscovered);

  if (dayData.exhausted) {
    return res.json({ date: dateStr, animals: [], completed: true, exhausted: true });
  }

  const animalCards = dayData.animals.map(id => {
    const isRevealed = revealedToday.includes(id);
    const animal = animals.find(a => a.id === id);
    if (isRevealed && animal) {
      return { id, revealed: true, name: animal.name, emoji: animal.emoji, color: animal.color, image: animal.image, facts: animal.facts, videoUrl: animal.videoUrl, videoType: animal.videoType };
    }
    return { id, revealed: false };
  });

  const completed = revealedToday.length >= dayData.animals.length &&
    dayData.animals.every(id => revealedToday.includes(id));

  res.json({ date: dateStr, animals: animalCards, completed, exhausted: false });
});

// Reveal an animal (client sends its state)
app.post('/api/reveal', auth, (req, res) => {
  const { animalId, discoveredIds, revealedToday } = req.body;
  if (!animalId) return res.status(400).json({ error: 'animalId required' });

  const dateStr = getTodayString();
  const validDiscovered = (discoveredIds || []).filter(id => animals.find(a => a.id === id));
  const dayData = getAnimalsForDay(req.username, dateStr, validDiscovered);

  if (!dayData.animals.includes(animalId)) {
    return res.status(400).json({ error: 'Animal not assigned today' });
  }

  const animal = animals.find(a => a.id === animalId);
  if (!animal) return res.status(404).json({ error: 'Animal not found' });

  // Check if all 3 are now revealed
  const newRevealed = [...new Set([...(revealedToday || []), animalId])];
  const completed = newRevealed.length >= dayData.animals.length &&
    dayData.animals.every(id => newRevealed.includes(id));

  res.json({ animal, completed });
});

// Get zoo animals (client sends its discovered list, server returns full animal data)
app.post('/api/zoo', auth, (req, res) => {
  const discoveredIds = req.body.discoveredIds || [];
  const validDiscovered = discoveredIds.filter(id => animals.find(a => a.id === id));

  const zooAnimals = validDiscovered.map(id => {
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
