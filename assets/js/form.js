const userName = document.querySelector('#userName');
const blogTitle = document.querySelector('#blogTitle');
const blogContent = document.querySelector('#blogContent');
const submit = document.querySelector('#submit');
const alertsDiv = document.querySelector('#alerts')
const htmlFilePath = "../blog.html"

let blogList = [];

// checks to see if there was any previously stored user input
function init() {
    const storedBlogs = JSON.parse(localStorage.getItem('storedBlogs'));
    if (storedBlogs !== null) {
        blogList = storedBlogs;
        console.log(blogList);
    }
}

// displays alerts if no input was recieved
function displayAlert(alert) {
    alertsDiv.textContent = alert;
}

// when user submits, checks that all fields have user input, stores it in local storage
// adds user input to localStorage
// then opens blog.html page to show the user input displayed
submit.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();

    if (userName.value === "") {
        displayAlert('Please add a (User Name)')
    } else if (blogTitle.value === '') {
        displayAlert('Please add a (Blog Title)')   
    } else if (blogContent.value === '') {
        displayAlert('Please add some (Blog Content)')    
    } else {
        const blogger = {
            author: userName.value.trim(),
            title: blogTitle.value.trim(),
            content: blogContent.value.trim()
        };

        blogList.push(blogger);    

        localStorage.setItem('storedBlogs', JSON.stringify(blogList));
        window.location.replace(htmlFilePath);
    }
});

init();