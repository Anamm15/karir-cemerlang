// NAVBAR
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLogo = document.getElementById('mobile-logo');

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const premiumSwiper = new Swiper('.layanan__premium__content', {
    slidesPerView: 1,
    watchOverflow: true,
    slidesPerView: 'auto',
    spaceBetween: 14,
    pagination: {
        el: '.swiper-pagination', 
        clickable: true, 
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});