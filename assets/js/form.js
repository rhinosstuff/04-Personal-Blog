const userName = document.querySelector('#userName');
const blogTitle = document.querySelector('#blogTitle');
const blogContent = document.querySelector('#blogContent');
const submit = document.querySelector('#submit');
const alertsDiv = document.querySelector('#alerts')
const htmlFilePath = "./blog.html"

// displays alerts if no userInput was entered
function displayAlert(alert) {
    alertsDiv.textContent = alert;
}

// when user submits, checks that all fields have userInput, stores it in localStorage blogger
// calls addBlogger() from logic.js to add new userInput to blogs array
// opens blog.html, to show the userInput displayed
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

        localStorage.setItem('blogger', JSON.stringify(blogger));
        addBlogger();    
        window.location.replace(htmlFilePath);
    }
});

// calls storedBlogs() from logic.js to initiallize any previous localStorage entries
storedBlogs();