// NAVBAR
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLogo = document.getElementById('mobile-logo');

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const artikelSwiper = new Swiper('.artikel__carousel', {
    slidesPerView: 'auto', 
    spaceBetween: 16,
    breakpoints: {
        1025: { enabled: false }, 
    },
});
