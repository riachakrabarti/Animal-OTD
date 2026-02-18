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
    return this.request('GET', '/api/today');
  },

  reveal(animalId) {
    return this.request('POST', '/api/reveal', { animalId });
  },

  getZoo() {
    return this.request('GET', '/api/zoo');
  }
};
