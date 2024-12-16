// NAVBAR
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLogo = document.getElementById('mobile-logo');

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const password = document.getElementById('password');
const eye = document.querySelector('.eye');
const eyeOff = document.querySelector('.eye-off');
eye.addEventListener('click', () => {
    eye.classList.add('hidden');
    eyeOff.classList.remove('hidden');
    password.setAttribute('type', 'password');
})
eyeOff.addEventListener('click', () => {
    eye.classList.remove('hidden');
    eyeOff.classList.add('hidden');
    password.setAttribute('type', 'text');
})

const konfirmasi_password = document.getElementById('konfirmasi_password');
const eye2 = document.querySelector('.eye2');
const eyeOff2 = document.querySelector('.eye-off2');
eye2.addEventListener('click', () => {
    eye2.classList.add('hidden');
    eyeOff2.classList.remove('hidden');
    konfirmasi_password.setAttribute('type', 'password');
})
eyeOff2.addEventListener('click', () => {
    eye2.classList.remove('hidden');
    eyeOff2.classList.add('hidden');
    konfirmasi_password.setAttribute('type', 'text');
})