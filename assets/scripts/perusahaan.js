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

Fancybox.bind("[data-fancybox]", {
    Image: {
        fit: "contain", 
        maxWidth: "60%", 
        maxHeight: "80%",
    },
});


