// NAVBAR
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLogo = document.getElementById('mobile-logo');

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


// CAROUSEL
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let currentIndex = 0;

// Function to update the carousel's position
function updateCarousel() {
  const offset = currentIndex * -100;
  carousel.style.transform = `translateX(${offset}%)`;
}

// Event listeners for navigation buttons
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; 
  updateCarousel();
});

let startX = 0;
let isDragging = false;

carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX; 
  isDragging = true;
});

carousel.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  const diffX = currentX - startX;

  carousel.style.transform = `translateX(calc(${currentIndex * -100}% + ${diffX}px))`;
});

carousel.addEventListener('touchend', (e) => {
  isDragging = false;
  const endX = e.changedTouches[0].clientX;
  const diffX = endX - startX;

  if (diffX > 50) {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  } else if (diffX < -50) {
    currentIndex = (currentIndex + 1) % images.length;
  }

  updateCarousel();
});

const kategoriSwiper = new Swiper('.kategori__carousel', {
  slidesPerView: 'auto',
  spaceBetween: 22, 
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  loop: true,
  watchOverflow: true,
});


const artikelSwiper = new Swiper('.artikel__carousel', {
  slidesPerView: 'auto', 
  spaceBetween: 16,     
  breakpoints: {
      1025: { enabled: false }, 
  },
});

const pekerjaanSwiper = new Swiper('.pekerjaan__carousel', {
    slidesPerView: 'auto',
    loop: true,
    watchOverflow: true,
    breakpoints: {
        1025: { 
            enabled: false,
         },
    },
});

