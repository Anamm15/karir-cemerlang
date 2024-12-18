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