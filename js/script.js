var projects = [
  {
    "name": "Pokedex",
    "img": "pokedex.jpg",
    "about": "A simple app works with pokeapi.co and shows different type of pokemons with filter by name or ability",
    "stack": ["A simple app works with pokeapi.co and shows different type of pokemons with filter by name or ability", "AngularJs 1.5, JavaScript (TypeScript)", "HTML5 (Pug), CSS3 (LESS)", "Responsive Web Design", "RESTful API", "Language: English"],
    "code": "pokedex",
    "view": "pokedex",
    "enabled": true
  },
  {
    "name": "Giffy",
    "img": "giffy.jpg",
    "about": "An app works with Giffy API with abiluty to set gif in your own gallery and filter images by tags",
    "stack": ["An app works with Giffy API with abiluty to set gif in your own gallery and filter images by tags", "AngularJs 1.5, JavaScript (TypeScript)", "HTML5 (Pug), CSS3 (LESS), Angular Material", "Responsive Web Design", "RESTful API", "Language: English"],
    "view": "gifApp",
    "enabled": true
  }, 
  {
    "name": "The Band",
    "img": "the-band.jpg",
    "about": "The website of an imaginary music band wiht performance calendar and listinng to their music",
    "stack": ["The website of an imaginary music band wiht performance calendar and listinng to their music", "HTML5 (Pug), CSS3 (LESS), JavaScript (TypeScript)", "Responsive Web Design", "Progressive Enhancement", "Language: English"],
    "code": "the-band",
    "view": "the-band",
    "enabled": true
  },
  {
    "name": "Autoclub",
    "img": "autoclub.jpg",
    "about": "The real web-site of autoschool with sending e-mails and real tests",
    "stack": ["Real web-site of autoschool with sending e-mails and real tests", "HTML5, CSS3 (LESS)", "Responsive Web Design", "Language: Russian"],
    "real": "http://avtoclub.dn.ua/",
    "view": "autoclub",
    "enabled": true
  },
  {
    "name": "Confectionary",
    "img": "confectionary.jpg",
    "about": "An imaginary landing page for a confectionary",
    "stack": ["An imaginary landing page for a confectionary", "HTML5, CSS3, JavaScript", "Responsive Web Design", "Progressive Enhancement", "Language: Russian"],
    "code": "confectionery",
    "view": "confectionery",
    "enabled": true
  },
  {
    "name": "GoodInc",
    "img": "goodinc.jpg",
    "about": "An example of transform a disign into a web site",
    "stack": ["Free PSD template: portfolio + blog", "HTML5, SCSS, ZURB Foundation 6", "Responsive Web Design", "Language: English"],
    "code": "GoodInc",
    "view": "GoodInc",
    "enabled": true
  },
  {
    "name": "Innosphera",
    "img": "sedona.jpg",
    "about": "An example of transform a disign into a web site with picture autoloading",
    "stack": ["HTML5, CSS3, jQuery, LESS", "Responsive Web Design", "Progressive Enhancement", "Language: English"],
    "code": "innosphera",
    "view": "innosphera",
    "enabled": true
  },
  {
    "name": "Sedona",
    "img": "innosphera.jpg",
    "about": "A training project for my studing in HTML academy",
    "stack": ["HTML5, CSS3, JavaScript", "Rubber layout (768px - 1200px)", "Progressive Enhancement", "Language: Russian"],
    "code": "144410-sedona",
    "view": "sedona",
    "enabled": true
  },
  {
    "name": "BarberShop",
    "img": "barbershop.jpg",
    "about": "A training project for my studing in HTML academy",
    "stack": ["HTML5, CSS3, JavaScript", "Fixed layout", "Progressive Enhancement", "Language: Russian"],
    "code": "144410-barbershop",
    "view": "barbershop",
    "enabled": true
  }
];

function ready() {
  var projectList = document.createElement("div");
  var conteiner = document.querySelector(".projects");
  projectList.classList.add("projects-list");
  var project, projectName, image, imageContain, ul, li, btn, btnA;
  projects = projects.filter(function(item) {
    return item.enabled == true;
  });
  for(var i=0, max = projects.length; i<max; i++) {
    project = document.createElement("article");
    project.classList.add("project");
    projectName = document.createElement("span");
    projectName.classList.add("project-name");
    projectName.textContent = projects[i].name;
    project.appendChild(projectName);

    imageContain = document.createElement("div");
    imageContain.classList.add("contain-image");
    image = document.createElement("img");
    image.src = "img/"+projects[i].img;
    image.width = "580";
    image.height = "795";
    image.alt = projects[i].name;
    imageContain.appendChild(image);
    

    ul = document.createElement("ul");
    ul.classList.add("project-about");
    for (var j=0, maxj=projects[i].stack.length; j<maxj; j++) {
      li = document.createElement("li");
      li.textContent = projects[i].stack[j];
      ul.appendChild(li)
    }    
    imageContain.appendChild(ul);
    project.appendChild(imageContain);

    btn = document.createElement("div");
    btn.classList.add("btn-nav");

    if (projects[i].hasOwnProperty("code")) {
      btnA = document.createElement("a");
      btnA.href = "https://github.com/mardarolya/"+projects[i].code;
      btnA.textContent = "Code";
      btnA.classList.add("btn");
      btnA.classList.add("btn-more");
      btn.appendChild(btnA);
    }
    if (projects[i].hasOwnProperty("view")) {
      btnA = document.createElement("a");
      btnA.href = "projects/"+projects[i].view+"/index.html";
      btnA.textContent = "View";
      btnA.classList.add("btn");
      btnA.classList.add("btn-more");
      btn.appendChild(btnA);
    }
    if (projects[i].hasOwnProperty("real")) {
      btnA = document.createElement("a");
      btnA.href = projects[i].real;
      btnA.textContent = "Real";
      btnA.classList.add("btn");
      btnA.classList.add("btn-more");
      btn.appendChild(btnA);
    }

    project.appendChild(btn);
    projectList.appendChild(project);
  }
  conteiner.appendChild(projectList);
}

document.addEventListener("DOMContentLoaded", ready);

