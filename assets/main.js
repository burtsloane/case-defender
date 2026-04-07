
(function () {
  const config = {
    password: 'defender',
    storageKey: 'case-defender-platform-access'
  };
  const gate = document.getElementById('platform-gate');
  if (!gate) return;
  const form = document.getElementById('gate-form');
  const input = document.getElementById('gate-input');
  const error = document.getElementById('gate-error');
  const reveal = () => gate.classList.add('hidden');
  try {
    if (localStorage.getItem(config.storageKey) === 'granted') reveal();
  } catch (e) {}
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if ((input.value || '').trim() === config.password) {
      try { localStorage.setItem(config.storageKey, 'granted'); } catch (e) {}
      reveal();
      return;
    }
    error.textContent = 'Incorrect access code.';
    input.focus();
    input.select();
  });
})();
