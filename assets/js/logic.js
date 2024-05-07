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


let blogs = [];

// checks to see if there was any previously storedBlogs from localStorage and adds to blogs array
function storedBlogs() {
    const storedBlogs = JSON.parse(localStorage.getItem('storedBlogs'));
    
    if (storedBlogs !== null) {
        blogs = storedBlogs;
    }
}

// gets userInput from localStorage blogger and adds it to blogs array
function addBlogger() {
    const blogger = JSON.parse(localStorage.getItem('blogger'));
    blogs.push(blogger);
    localStorage.setItem('storedBlogs', JSON.stringify(blogs));
}