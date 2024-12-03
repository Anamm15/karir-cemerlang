// NAVBAR
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLogo = document.getElementById('mobile-logo');

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


const perusahaanSwiper = new Swiper('.perusahaan__carousel', {
    slidesPerView: 1,
    loop: true,
    watchOverflow: true,
    breakpoints: {
        576: { slidesPerView: 1 },
        767: { slidesPerView: 2 },
        1024: { enabled: false },
    },
    pagination: {
        el: '.swiper-pagination', 
        clickable: true, 
    },
});

