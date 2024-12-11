// NAVBAR
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLogo = document.getElementById('mobile-logo');

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

let isInputing = false;

const informasi__edit__button = document.querySelector('.informasi__edit__button');
const informasi__p = document.querySelectorAll('.input__group p');
const informasi__input = document.querySelectorAll('.input__group input');
const informasi__select = document.querySelectorAll('.select__form__group');
const informasi__button = document.querySelector('.informasi__button');

informasi__edit__button.addEventListener('click', () => {
    if (!isInputing) {
        informasi__p.forEach((p) => {
            p.classList.add('hidden');
        });
        informasi__input.forEach((input) => {
            input.classList.remove('hidden');
        });
        informasi__select.forEach((select) => {
            select.classList.remove('hidden');
        });
        informasi__button.classList.remove('hidden');
        isInputing = true;
    } else {
        informasi__p.forEach((p) => {
            p.classList.remove('hidden');
        });
        informasi__input.forEach((input) => {
            input.classList.add('hidden');
        });
        informasi__select.forEach((select) => {
            select.classList.add('hidden');
        });
        informasi__button.classList.add('hidden');
        isInputing = false;
    }
});