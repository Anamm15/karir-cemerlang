// NAVBAR
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLogo = document.getElementById('mobile-logo');

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


const pekerjaanSwiper = new Swiper('.pekerjaan__carousel', {
    slidesPerView: 'auto',
    loop: true,
    watchOverflow: true,
    breakpoints: {
        577: { enabled: false, },
    },
});


