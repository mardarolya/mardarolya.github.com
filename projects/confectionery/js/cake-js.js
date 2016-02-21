var OpenSmallMenu = document.querySelector(".small-nav");
var CloseSmallMenu = document.querySelector(".smal-nav-back");
var SmallMenu = document.querySelector(".small-navigation");

OpenSmallMenu.addEventListener("click", function(event) {
  event.preventDefault();
  SmallMenu.classList.add("show-menu");
  });

CloseSmallMenu.addEventListener("click", function(event) {
  event.preventDefault();
  SmallMenu.classList.remove("show-menu");
  });

var CakeFirst = document.querySelector(".cake-first");
var CakeFirstText = document.querySelector(".cake-more-first");
var CakeFirstClose = document.querySelector(".cake-close-first");

var CakeSecond = document.querySelector(".cake-second");
var CakeSecondText = document.querySelector(".cake-more-second");
var CakeSecondClose = document.querySelector(".cake-close-second");

var CakeThird = document.querySelector(".cake-third");
var CakeThirdText = document.querySelector(".cake-more-third");
var CakeThirdClose = document.querySelector(".cake-close-third");

var CakeFourth = document.querySelector(".cake-fourth");
var CakeFourthText = document.querySelector(".cake-more-fourth");
var CakeFourthClose = document.querySelector(".cake-close-fourth");

var CakeFifth = document.querySelector(".cake-fifth");
var CakeFifthText = document.querySelector(".cake-more-fifth");
var CakeFifthClose = document.querySelector(".cake-close-fifth");

var CakeSixth = document.querySelector(".cake-sixth");
var CakeSixthText = document.querySelector(".cake-more-sixth");
var CakeSixthClose = document.querySelector(".cake-close-sixth");

CakeFirst.addEventListener("click", function(event) {
  event.preventDefault();
  CakeFirstText.classList.add("more-text-show");
  CakeFirstClose.classList.add("more-text-show");
  });

CakeFirstClose.addEventListener("click", function(event) {
  event.preventDefault();
  CakeFirstText.classList.remove("more-text-show");
  CakeFirstClose.classList.remove("more-text-show");
  });

CakeSecond.addEventListener("click", function(event) {
  event.preventDefault();
  CakeSecondText.classList.add("more-text-show");
  CakeSecondClose.classList.add("more-text-show");
  });

CakeSecondClose.addEventListener("click", function(event) {
  event.preventDefault();
  CakeSecondText.classList.remove("more-text-show");
  CakeSecondClose.classList.remove("more-text-show");
  });

CakeThird.addEventListener("click", function(event) {
  event.preventDefault();
  CakeThirdText.classList.add("more-text-show");
  CakeThirdClose.classList.add("more-text-show");
  });

CakeThirdClose.addEventListener("click", function(event) {
  event.preventDefault();
  CakeThirdText.classList.remove("more-text-show");
  CakeThirdClose.classList.remove("more-text-show");
  });

CakeFourth.addEventListener("click", function(event) {
  event.preventDefault();
  CakeFourthText.classList.add("more-text-show");
  CakeFourthClose.classList.add("more-text-show");
  });

CakeFourthClose.addEventListener("click", function(event) {
  event.preventDefault();
  CakeFourthText.classList.remove("more-text-show");
  CakeFourthClose.classList.remove("more-text-show");
  });

CakeFifth.addEventListener("click", function(event) {
  event.preventDefault();
  CakeFifthText.classList.add("more-text-show");
  CakeFifthClose.classList.add("more-text-show");
  });

CakeFifthClose.addEventListener("click", function(event) {
  event.preventDefault();
  CakeFifthText.classList.remove("more-text-show");
  CakeFifthClose.classList.remove("more-text-show");
  });

CakeSixth.addEventListener("click", function(event) {
  event.preventDefault();
  CakeSixthText.classList.add("more-text-show");
  CakeSixthClose.classList.add("more-text-show");
  });

CakeSixthClose.addEventListener("click", function(event) {
  event.preventDefault();
  CakeSixthText.classList.remove("more-text-show");
  CakeSixthClose.classList.remove("more-text-show");
});
