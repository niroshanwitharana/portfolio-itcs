document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});


// adding sample projects to the portfolio, using an array to store the data as an collection of objects will keep my code "DRY".

const portfolioData = [
    {
      "id": 1,
      "name": "Book-Search",
      "images":"../images/book-search-desktop.png",
      "Decription": "React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. Also use Node, Express and MongoDB so that users can save books to review or purchase later.",
      "tech": "React, Express, MongoDB, Node.",
      "repo":"https://github.com/niroshanwitharana/GoogleBook_Search",
      "deployed" :"https://booksapp7517.web.app/"
    },
    {
      "id": 5,
      "name": "Get Grub",
      "images":"../images/get_grub_desktop2.png",
      "Decription": "Get Grub is a recipe finding application. This was group project which I worked on as part of a team. We used Trello board insted of canban board to plan our tasks, We followed Agile process.<br> User can login with google-ID, We used Passport and google Oauth to Authenticate and Authorize. Users can search recipies, add them in to My-list, delete them, add their own changes to recipies as comments and also update comments.",
      "tech": "HTML5/CSS3, Bootstrap, Materialize, JavaScript, API's, Node.js, Express.js, Handlebars, Sequelize, PostgreSQL, bcryptjs.",
      "repo":"https://github.com/meeday/git_grub",
      "deployed" :"http://get-grub-app.herokuapp.com/guest"
    },
    {
      "id": 3,
      "name": "Employee-Tracker",
      "images":"../images/employee-tracker3.png",
      "Decription": "This is a command line application that allows users to add departments, roles, employees, view departments, roles and employees. Users can also update employee roles, view employees by manager, delete departments, roles and employees.",
      "tech": "node, inquirer, and MySQL.",
      "repo":"https://github.com/niroshanwitharana/Employee-Tracker",
      "deployed" :""
    },
    {
      "id": 4,
      "name": "BookWorm",
      "images":"../images/desktop.png",
      "Decription": "Fry Cook",
      "tech": "BookWorm is a web site where Users can search book by title, author or genre. Users can add books in to a list and delete from the list. Full descriptions of the book can be viewed, a target read date can be added.",
      "repo":"https://github.com/niroshanwitharana/Bookworm",
      "deployed" :"https://joedodgson.github.io/Bookworm/home.html"
    }
        
  ];;

const portfolioElement = document.getElementById("portfolio");

portfolioData.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
    <div class="overlay">
    <img src="${project.images}" alt="${project.name}">
            <div class="project-info">
                <h3>${project.name}</h3>
                <p>${project.Decription}</p>
                <p class= "tech">${project.tech}</p>
                <a class="firstLink" href="${project.repo}" target="_blank">GitHub</a>
                <a class="secondLink" href="${project.deployed}" target="_blank">Demo</a>
            </div>
        </div>
    `;
    portfolioElement.appendChild(projectCard);
  });
