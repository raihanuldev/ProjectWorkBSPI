function updateClock() {
  const now = new Date();

  const h = now.getHours().toString().padStart(2, '0');
  const m = now.getMinutes().toString().padStart(2, '0');
  const s = now.getSeconds().toString().padStart(2, '0');

  document.getElementById('time').textContent = `${h}:${m}:${s}`;

  const d = now.getDate().toString().padStart(2, '0');
  const mo = (now.getMonth() + 1).toString().padStart(2, '0');
  const y = now.getFullYear();
  document.getElementById('date').textContent = `${d}/${mo}/${y}`;
}

setInterval(updateClock, 1000);
updateClock();
