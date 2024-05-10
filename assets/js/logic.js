const themeCSS = document.querySelector('.themeCSS');
const themeButton = document.querySelector('#themeButton');
const themeButtonImg = document.querySelector('#themeButtonImg');
const mainImg = document.querySelector('#mainImg');

// changes .themeCSS class between light and dark
// changes #themeButtonImg src depending on light dark
// changes #mainImg src & alt depending on light dark
function lightMode() {
    themeCSS.setAttribute('class', 'light');
    themeButtonImg.setAttribute('src', 'assets/images/day-mode.png');
    mainImg.setAttribute('src', 'assets/images/pug.jpg');
    mainImg.setAttribute('alt', 'pug wearing pink bowtie and sunglasses');
}

function darkMode() {
    themeCSS.setAttribute('class', 'dark');
    themeButtonImg.setAttribute('src', 'assets/images/night-mode.png');
    mainImg.setAttribute('src', 'assets/images/owl.jpg');
    mainImg.setAttribute('alt', 'snowy owl in winter');
}

// themeMode() initializes and keeps track of 'light' or 'dark' modes in localStorage
// it first checks to see if there was a previously storedMode from localStorage
// if true, calls lightMode() or darkMode() based on storedMode value 'light' or 'dark'
// if false, sets storedMode to 'light' in localStorage, then calls lightMode() to initialize
function themeMode() {
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

// themeButton when clicked gets storedMode from localStorage 
// checks for 'light' or 'dark' value then switches to the oppisite mode
// then stores the new mode in localStorage
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
})

// checks to see if there was any previously storedBlogs from localStorage and adds to blogs array
let blogs = [];

function storedBlogs() {
    const storedBlogs = JSON.parse(localStorage.getItem('storedBlogs'));
    
    if (storedBlogs !== null) {
        blogs = storedBlogs;
    }
}

// gets userInput from blogger in localStorage and adds it to blogs array
function addBlogger() {
    const blogger = JSON.parse(localStorage.getItem('blogger'));
    blogs.push(blogger);
    localStorage.setItem('storedBlogs', JSON.stringify(blogs));
}