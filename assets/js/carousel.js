let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-card');

let currentIndex = 0;
let totalItems = carouselItems.length - 2;
let cardWidth = 33.33333;
let paused = false;


function updateViewport() {
  // Value won't change unless updated
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if(viewportWidth <= 767 ){
    // Phone viewport (1 card visible)
    totalItems = carouselItems.length;
    cardWidth = 100;
  } else if(viewportWidth >= 768 && viewportWidth <= 1023){
    // Tablet viewport (2 cards visible)
    totalItems = carouselItems.length - 1;
    cardWidth = 50;
  } else {
    // Desktop viewport (3 card visible)
    totalItems = carouselItems.length - 2;
    cardWidth = 33.333333;
  }
}

function toggleSlide() {
  // change icon
  if(!paused){
    document.getElementById("carousel-pause").className = "fa-solid fa-play";
  } else {
    document.getElementById("carousel-pause").className = "fa-solid fa-pause";
  }

  // toggle slide progression
  paused = !paused;
}

function updateCarousel() {
  updateViewport()

  const offset = -currentIndex;
  carouselInner.style.transform = `translateX(calc(${cardWidth}%  * ${offset} )`;
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

function autoSlide() {
  if(!paused){
    showNextSlide()
  }
}


setInterval(autoSlide, 3000);