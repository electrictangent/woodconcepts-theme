let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-card');

let currentIndex = 0;
let totalItems = carouselItems.length - 2;
let cardWidth = 33.33333;


function updateViewport() {
  // Value won't change unless updated
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if(viewportWidth <= 767 ){
    // Phone viewport
    totalItems = carouselItems.length;
    cardWidth = 100;
  } else if(viewportWidth >= 768 && viewportWidth <= 1023){
    // Tablet viewport
    totalItems = carouselItems.length - 1;
    cardWidth = 50;
  } else {
    // Desktop viewport
    totalItems = carouselItems.length - 2;
    cardWidth = 33.333333;
  }
}

function showNextSlide() {
  updateViewport()
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

function showPrevSlide() {
  updateViewport()
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

function updateCarousel() {
  updateViewport()
  const offset = -currentIndex;
  carouselInner.style.transform = `translateX(calc(${cardWidth}%  * ${offset} )`;
}

setInterval(showNextSlide, 3000);