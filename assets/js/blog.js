const main = document.querySelector('main');
const backButton = document.querySelector('#backButton');
const htmlFilePath = "../index.html";

// takes user back to index.html so they can input more
backButton.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    window.location.replace(htmlFilePath);
});

// creates html elements inside of main for every user in blogList
const blogList = JSON.parse(localStorage.getItem('storedBlogs'));

for (let i = 0; i < blogList.length; i++) {
    const blog = blogList[i];

    const section = document.createElement('section');
    section.className = 'blogContainer';
    main.appendChild(section);

    const title = document.createElement('h2');
    title.className = 'blogTitle';
    title.textContent = blog.title;
    section.appendChild(title);

    const content = document.createElement('p');
    content.className = 'blogContent';
    content.textContent = blog.content;
    section.appendChild(content);

    const author = document.createElement('p');
    author.className = 'author';
    author.textContent = `Posted by: ${blog.author}`;
    section.appendChild(author); 
}

