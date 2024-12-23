// NAVBAR
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerMenu.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => {
            mobileMenu.classList.remove('-translate-y-full', 'opacity-0');
            mobileMenu.classList.add('translate-y-0', 'opacity-100');
        }, 10);
    } else {
        mobileMenu.classList.remove('translate-y-0', 'opacity-100');
        mobileMenu.classList.add('-translate-y-full', 'opacity-0');
        
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
    }
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
  spaceBetween: 16, 
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  loop: true,
  watchOverflow: true,
});

const pekerjaanSwiper = new Swiper('.pekerjaan__carousel', {
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 16, 
  watchOverflow: true,
  breakpoints: {
      1025: { 
          enabled: false,
       },
  },
});

const artikelSwiper = new Swiper('.artikel__carousel', {
  slidesPerView: 'auto', 
  spaceBetween: 16,     
  breakpoints: {
      1025: { enabled: false }, 
  },
});

