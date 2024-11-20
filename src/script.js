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

// kategori
let currentSlide = 0;
const kategori = document.querySelector('.kategori__content');
const totalSlides = document.querySelectorAll('.kategori__content > div').length;

let startXKategori = 0;
let isKategoriDragging = false;

kategori.addEventListener('touchstart', (e) => {
    startXKategori = e.touches[0].clientX;
    isKategoriDragging = true;
});

kategori.addEventListener('touchmove', (e) => {
    if (!isKategoriDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = currentX - startXKategori;

    kategori.style.transform = `translateX(calc(-${currentSlide * -100}% + ${diffX}px))`;
});

kategori.addEventListener('touchend', (e) => {
    isKategoriDragging = false;
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - startXKategori;

    if (diffX > 50 && currentSlide > 0) {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    } else if (diffX < -50 && currentSlide < totalSlides - 1) {
        currentSlide = (currentSlide + 1) % totalSlides;
    }

    updateCarouselKategori();
});

function updateCarouselKategori() {
    kategori.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// artikel
let currentSlideArtikel = 0;
const artikel = document.querySelector('.artikel__content');
const totalSlidesArtikel = document.querySelectorAll('.artikel__content > div').length;

let startXartikel = 0;
let isArtikelDragging = false;

artikel.style.transition = 'transform 0.3s ease-in-out';

artikel.addEventListener('touchstart', (e) => {
    startXartikel = e.touches[0].clientX;
    isArtikelDragging = true;

    artikel.style.transition = 'none';
});

artikel.addEventListener('touchmove', (e) => {
    if (!isArtikelDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = currentX - startXartikel;

    artikel.style.transform = `translateX(calc(-${currentSlideArtikel * -100}% + ${diffX}px))`;
});

artikel.addEventListener('touchend', (e) => {
    isArtikelDragging = false;
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - startXartikel;

    artikel.style.transition = 'transform 0.3s ease-in-out';

    if (diffX > 50 && currentSlideArtikel > 0) {
        currentSlideArtikel = (currentSlideArtikel - 1 + totalSlidesArtikel) % totalSlidesArtikel;
    } else if (diffX < -50 && currentSlideArtikel < totalSlidesArtikel - 1) {
        currentSlideArtikel = (currentSlideArtikel + 1) % totalSlidesArtikel;
    }
    updateCarouselArtikel();
});

function updateCarouselArtikel() {
    artikel.style.transform = `translateX(-${currentSlideArtikel * 100}%)`;
}


// pekerjaan
let currentSlidePekerjaan = 0;
const pekerjaan = document.querySelector('.pekerjaan__content');
const totalSlidesPekerjaan = document.querySelectorAll('.pekerjaan__content > div').length;

let startXPekerjaan = 0;
let isPekerjaanDragging = false;

pekerjaan.style.transition = 'transform 0.3s ease-in-out';

pekerjaan.addEventListener('touchstart', (e) => {
    startXPekerjaan = e.touches[0].clientX;
    isPekerjaanDragging = true;

    pekerjaan.style.transition = 'none';
});

pekerjaan.addEventListener('touchmove', (e) => {
    if (!isPekerjaanDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = currentX - startXPekerjaan;

    pekerjaan.style.transform = `translateX(calc(-${currentSlidePekerjaan * -100}% + ${diffX}px))`;
});

pekerjaan.addEventListener('touchend', (e) => {
    isPekerjaanDragging = false;
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - startXPekerjaan;

    pekerjaan.style.transition = 'transform 0.3s ease-in-out';

    if (diffX > 50 && currentSlidePekerjaan > 0) {
        currentSlidePekerjaan = (currentSlidePekerjaan - 1 + totalSlidesPekerjaan) % totalSlidesPekerjaan;
    } else if (diffX < -50 && currentSlidePekerjaan < totalSlidesPekerjaan - 1) {
        currentSlidePekerjaan = (currentSlidePekerjaan + 1) % totalSlidesPekerjaan;
    }
    updateCarouselPekerjaan();
});

function updateCarouselPekerjaan() {
    pekerjaan.style.transform = `translateX(-${currentSlidePekerjaan * 100}%)`;
}