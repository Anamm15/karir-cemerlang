// NAVBAR
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLogo = document.getElementById('mobile-logo');

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


const pekerjaanSwiper = new Swiper('.pekerjaan__carousel', {
    slidesPerView: 1,
    loop: true,
    watchOverflow: true,
    breakpoints: {
        576: { slidesPerView: 1 },
        767: { slidesPerView: 2 },
        1024: { enabled: false, },
    },
});
