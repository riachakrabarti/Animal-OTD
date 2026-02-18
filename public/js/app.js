const App = {
  screens: ['login', 'daily', 'zoo'],

  init() {
    // Modal close handlers
    const modal = document.getElementById('animal-modal');
    modal.querySelector('.modal-close').addEventListener('click', () => {
      modal.classList.add('hidden');
      const iframe = modal.querySelector('iframe');
      if (iframe) iframe.src = '';
    });
    modal.querySelector('.modal-backdrop').addEventListener('click', () => {
      modal.classList.add('hidden');
      const iframe = modal.querySelector('iframe');
      if (iframe) iframe.src = '';
    });

    // Navigation
    document.getElementById('zoo-btn').addEventListener('click', () => App.showScreen('zoo'));
    document.getElementById('back-btn').addEventListener('click', () => App.showScreen('daily'));

    // Sign out
    document.getElementById('signout-btn').addEventListener('click', () => App.signOut());

    // Init login listeners
    Auth.init();

    // Check session
    if (API.getToken()) {
      this.showScreen('daily');
    } else {
      this.showScreen('login');
    }
  },

  showScreen(name) {
    this.screens.forEach(s => {
      document.getElementById(`screen-${s}`).classList.remove('active');
    });
    document.getElementById(`screen-${name}`).classList.add('active');

    if (name === 'daily') Daily.init();
    if (name === 'zoo') Zoo.init();
    if (name === 'login') {
      setTimeout(() => document.getElementById('passcode-input').focus(), 100);
    }
  },

  signOut() {
    API.clearSession();
    this.showScreen('login');
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
