const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});


let totalSeconds = 59 * 60 * 60 + 59 * 60 + 59;
  const hours = document.getElementById('hours');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');

  function updateTimer() {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    hours.textContent = String(h).padStart(2, '0');
    minutes.textContent = String(m).padStart(2, '0');
    seconds.textContent = String(s).padStart(2, '0');
    if (totalSeconds > 0) {
      totalSeconds--;
    } else {
      clearInterval(timer);
      alert('Время вышло!');
    }
  }
  updateTimer();
  const timer = setInterval(updateTimer, 1000);

