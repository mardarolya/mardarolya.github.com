function getData(){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(this.responseText);arrayCarousel=e.carousel,goNext(),carouselNonStop()}},e.open("GET","widgets/carousel.json",!0),e.send()}function carouselNonStop(){arrayCarousel.length>0&&(interval=setInterval(function(){indexCarousel==arrayCarousel.length-1&&(indexCarousel=-1),goNext()},5e3))}function setData(){arrayCarousel.length>indexCarousel&&(imgCarousel.src="img/"+arrayCarousel[indexCarousel].img,headerCarousel.innerHTML=arrayCarousel[indexCarousel].header,bodyCarousel.innerHTML=arrayCarousel[indexCarousel].body)}function goNext(){indexCarousel+=1,setData(),checkButtons()}function goPrev(){indexCarousel-=1,setData(),checkButtons()}function checkButtons(){nextButton.disabled=!1,prevButton.disabled=!1,indexCarousel==arrayCarousel.length-1&&(nextButton.disabled=!0),0==indexCarousel&&(prevButton.disabled=!0)}var prevButton=document.getElementById("prev"),nextButton=document.getElementById("next"),imgCarousel=document.querySelector(".carousel .carousel-image img"),headerCarousel=document.querySelector(".carousel h2"),bodyCarousel=document.querySelector(".carousel p"),indexCarousel=-1,arrayCarousel=[],interval;getData(),nextButton.onclick=goNext,prevButton.onclick=goPrev;