var btnMore = document.querySelectorAll(".btn-more");
var btnLess = document.querySelectorAll(".btn-less");

for (var i = 0, max = btnMore.length; i < max; i++) {
  btnMore[i].addEventListener("click", function(event){
    event.preventDefault();
    this.classList.add("unvisible-block");
    var lessBtn = this.nextElementSibling;
    lessBtn.classList.add("visible-inline-block");
    var projectAbout = this.parentElement.parentElement.querySelector(".project-about");
    projectAbout.style.setProperty("display", "block");
    var github = this.parentElement.parentElement.querySelector(".github-code");
    github.style.setProperty("display", "inline-block");
  });
}

for (var j = 0, maxl = btnLess.length; j < maxl; j++) {
  btnLess[j].addEventListener("click", function(event){
    event.preventDefault();
    this.classList.remove("unvisible-block");
    var moreBtn = this.previousElementSibling;
    moreBtn.classList.remove("visible-inline-block");
    var projectAbout = this.parentElement.parentElement.querySelector(".project-about");
    projectAbout.style.setProperty("display", "none");
    var github = this.parentElement.parentElement.querySelector(".github-code");
    github.style.setProperty("display", "none");
  });
}

