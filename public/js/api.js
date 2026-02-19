const API = {
  getToken() {
    return sessionStorage.getItem('token');
  },

  setSession(token, username) {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('username', username);
  },

  clearSession() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
  },

  getUsername() {
    return sessionStorage.getItem('username');
  },

  // --- localStorage persistence (per-user) ---
  _storageKey(key) {
    const user = this.getUsername();
    return user ? `aotd_${user}_${key}` : null;
  },

  getDiscovered() {
    const k = this._storageKey('discovered');
    if (!k) return [];
    try { return JSON.parse(localStorage.getItem(k)) || []; }
    catch { return []; }
  },

  addDiscovered(animalId) {
    const list = this.getDiscovered();
    if (!list.includes(animalId)) {
      list.push(animalId);
      localStorage.setItem(this._storageKey('discovered'), JSON.stringify(list));
    }
  },

  getRevealedToday() {
    const k = this._storageKey('revealedToday');
    if (!k) return { date: '', ids: [] };
    try {
      const data = JSON.parse(localStorage.getItem(k));
      if (data && data.date && data.ids) return data;
      return { date: '', ids: [] };
    } catch { return { date: '', ids: [] }; }
  },

  addRevealedToday(animalId, dateStr) {
    const current = this.getRevealedToday();
    // Reset if it's a new day
    if (current.date !== dateStr) {
      current.date = dateStr;
      current.ids = [];
    }
    if (!current.ids.includes(animalId)) {
      current.ids.push(animalId);
    }
    localStorage.setItem(this._storageKey('revealedToday'), JSON.stringify(current));
  },

  // --- API requests ---
  async request(method, path, body) {
    const headers = { 'Content-Type': 'application/json' };
    const token = this.getToken();
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const opts = { method, headers };
    if (body) opts.body = JSON.stringify(body);

    const res = await fetch(path, opts);

    if (res.status === 401) {
      this.clearSession();
      App.showScreen('login');
      throw new Error('Unauthorized');
    }

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Request failed');
    return data;
  },

  login(passcode) {
    return this.request('POST', '/api/login', { passcode });
  },

  getToday() {
    const discovered = this.getDiscovered();
    const todayRevealed = this.getRevealedToday();
    const today = new Date().toISOString().slice(0, 10);
    const revealedToday = todayRevealed.date === today ? todayRevealed.ids : [];
    return this.request('POST', '/api/today', {
      discoveredIds: discovered,
      revealedToday
    });
  },

  reveal(animalId) {
    const discovered = this.getDiscovered();
    const todayRevealed = this.getRevealedToday();
    const today = new Date().toISOString().slice(0, 10);
    const revealedToday = todayRevealed.date === today ? todayRevealed.ids : [];
    return this.request('POST', '/api/reveal', {
      animalId,
      discoveredIds: discovered,
      revealedToday
    });
  },

  getZoo() {
    const discovered = this.getDiscovered();
    return this.request('POST', '/api/zoo', { discoveredIds: discovered });
  }
};
