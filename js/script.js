var BtnMoreConfectionary = document.querySelector(".btn-more-confectionary");
var BtnLessConfectionary = document.querySelector(".btn-less-confectionary");
var ProjectAboutConfectionary = document.querySelector(".project-about-confectionary");
var GithubCodeConfectionary = document.querySelector(".github-code-confectionary");

var BtnMoreSedona = document.querySelector(".btn-more-sedona");
var BtnLessSedona = document.querySelector(".btn-less-sedona");
var ProjectAboutSedona = document.querySelector(".project-about-sedona");
var GithubCodeSedona = document.querySelector(".github-code-sedona");

var BtnMoreBarbershop = document.querySelector(".btn-more-barbershop");
var BtnLessBarbershop = document.querySelector(".btn-less-barbershop");
var ProjectAboutBarbershop = document.querySelector(".project-about-barbershop");
var GithubCodeBarbershop = document.querySelector(".github-code-barbershop");


BtnMoreConfectionary.addEventListener("click", function(event) {
  event.preventDefault();
  BtnLessConfectionary.classList.add("visible-inline-block");
  BtnMoreConfectionary.classList.add("unvisible-block");
  ProjectAboutConfectionary.classList.add("visible-block");
  GithubCodeConfectionary.classList.add("visible-inline-block");
});

BtnLessConfectionary.addEventListener("click", function(event) {
  event.preventDefault();
  BtnLessConfectionary.classList.remove("visible-inline-block");
  BtnMoreConfectionary.classList.remove("unvisible-block");
  ProjectAboutConfectionary.classList.remove("visible-block");
  GithubCodeConfectionary.classList.remove("visible-inline-block");
});

BtnMoreSedona.addEventListener("click", function(event) {
  event.preventDefault();
  BtnLessSedona.classList.add("visible-inline-block");
  BtnMoreSedona.classList.add("unvisible-block");
  ProjectAboutSedona.classList.add("visible-block");
  GithubCodeSedona.classList.add("visible-inline-block");
});

BtnLessSedona.addEventListener("click", function(event) {
  event.preventDefault();
  BtnLessSedona.classList.remove("visible-inline-block");
  BtnMoreSedona.classList.remove("unvisible-block");
  ProjectAboutSedona.classList.remove("visible-block");
  GithubCodeSedona.classList.remove("visible-inline-block");
});

BtnMoreBarbershop.addEventListener("click", function(event) {
  event.preventDefault();
  BtnLessBarbershop.classList.add("visible-inline-block");
  BtnMoreBarbershop.classList.add("unvisible-block");
  ProjectAboutBarbershop.classList.add("visible-block");
  GithubCodeBarbershop.classList.add("visible-inline-block");
});

BtnLessBarbershop.addEventListener("click", function(event) {
  event.preventDefault();
  BtnLessBarbershop.classList.remove("visible-inline-block");
  BtnMoreBarbershop.classList.remove("unvisible-block");
  ProjectAboutBarbershop.classList.remove("visible-block");
  GithubCodeBarbershop.classList.remove("visible-inline-block");
});
