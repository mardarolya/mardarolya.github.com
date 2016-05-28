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

var BtnMoreGoodInc = document.querySelector(".btn-more-goodinc");
var BtnLessGoodInc = document.querySelector(".btn-less-goodinc");
var ProjectAboutGoodInc = document.querySelector(".project-about-goodinc");
var GithubCodeGoodInc = document.querySelector(".github-code-goodinc");

var BtnMoreInnosphera = document.querySelector(".btn-more-innosphera");
var BtnLessInnosphera = document.querySelector(".btn-less-innosphera");
var ProjectAboutInnosphera = document.querySelector(".project-about-innosphera");
var GithubCodeInnosphera = document.querySelector(".github-code-innosphera");

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

BtnMoreGoodInc.addEventListener("click", function(event) {
  event.preventDefault();
  BtnLessGoodInc.classList.add("visible-inline-block");
  BtnMoreGoodInc.classList.add("unvisible-block");
  ProjectAboutGoodInc.classList.add("visible-block");
  GithubCodeGoodInc.classList.add("visible-inline-block");
});

BtnLessGoodInc.addEventListener("click", function(event) {
  event.preventDefault();
  BtnLessGoodInc.classList.remove("visible-inline-block");
  BtnMoreGoodInc.classList.remove("unvisible-block");
  ProjectAboutGoodInc.classList.remove("visible-block");
  GithubCodeGoodInc.classList.remove("visible-inline-block");
});

BtnMoreInnosphera.addEventListener("click", function(event) {
  event.preventDefault();
  BtnLessInnosphera.classList.add("visible-inline-block");
  BtnMoreInnosphera.classList.add("unvisible-block");
  ProjectAboutInnosphera.classList.add("visible-block");
  GithubCodeInnosphera.classList.add("visible-inline-block");
});

BtnLessInnosphera.addEventListener("click", function(event) {
  event.preventDefault();
  BtnLessInnosphera.classList.remove("visible-inline-block");
  BtnMoreInnosphera.classList.remove("unvisible-block");
  ProjectAboutInnosphera.classList.remove("visible-block");
  GithubCodeInnosphera.classList.remove("visible-inline-block");
});
