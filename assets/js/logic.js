const container = document.querySelector('.container');
const themeSwitcher = document.querySelector('#themeSwitcher')
const dayNightImg = document.querySelector('#dayNightImg')

// changes .container class between light and dark
// changes #dayNightImg src depending on light dark
localStorage.setItem('mode', 'light');
let mode = localStorage.getItem('mode');

themeSwitcher.addEventListener('click', function () {
    if (mode === 'light') {
      mode = 'dark';
      container.setAttribute('class', 'dark');
      dayNightImg.setAttribute('src', 'assets/images/night-mode.png');
      localStorage.setItem(mode);
    } else {
      mode = 'light';
      container.setAttribute('class', 'light');
      dayNightImg.setAttribute('src', 'assets/images/day-mode.png');
      localStorage.setItem(mode);
    }
});