const themeContainer = document.querySelector('.themeContainer');
const themeButton = document.querySelector('#themeButton')
const themeImg = document.querySelector('#themeImg')

// changes .themeContainer class between light and dark
// changes #themeImg src depending on light dark

function lightMode() {
    themeContainer.setAttribute('class', 'light');
    themeImg.setAttribute('src', 'assets/images/day-mode.png');
}

function darkMode() {
    themeContainer.setAttribute('class', 'dark');
    themeImg.setAttribute('src', 'assets/images/night-mode.png');
}

function containerMode() {
    let mode = 'light';
    let storedMode = localStorage.getItem('storedMode');
    
    if (storedMode !== null) {
        mode = storedMode;
    } else {
        localStorage.setItem('storedMode', mode)
    }

    if (mode === 'light') {
        lightMode();
    } else if (mode === 'dark') {
        darkMode();
    }
}

themeButton.addEventListener('click', function () {
    let mode = localStorage.getItem('storedMode');

    if (mode === 'light') {
        mode = 'dark';
        darkMode();
        localStorage.setItem('storedMode', mode);
    } else {
        mode = 'light';
        lightMode();
        localStorage.setItem('storedMode', mode);
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