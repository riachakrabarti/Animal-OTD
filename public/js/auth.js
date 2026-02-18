const Auth = {
  init() {
    const input = document.getElementById('passcode-input');
    const btn = document.getElementById('login-btn');
    const error = document.getElementById('login-error');

    const submit = async () => {
      const passcode = input.value.trim();
      if (!passcode) return;

      error.classList.add('hidden');
      btn.disabled = true;

      try {
        const data = await API.login(passcode);
        API.setSession(data.token, data.username);
        input.value = '';
        App.showScreen('daily');
      } catch (e) {
        error.textContent = 'Invalid passcode';
        error.classList.remove('hidden');
        input.value = '';
        input.focus();
      } finally {
        btn.disabled = false;
      }
    };

    btn.addEventListener('click', submit);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') submit();
    });
  }
};
