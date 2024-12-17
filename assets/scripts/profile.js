// NAVBAR
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLogo = document.getElementById('mobile-logo');

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


// PROFILE EDIT
let isInputing = false;
const editInformasiButton = document.querySelector('.informasi__edit__button');
const textInformasi = document.querySelectorAll('.input__group p');
const inputInformasi = document.querySelectorAll('.input__group input');
const selectInformasi = document.querySelectorAll('.select__form__group');
const buttonSimpan = document.getElementById('simpan__informasi');
const buttonBatal = document.getElementById('batal__informasi');

buttonBatal.addEventListener('click', () => {
    if (isInputing) isInputing = false;
});

editInformasiButton.addEventListener('click', () => {
    if (!isInputing) {
        textInformasi.forEach((p) => {
            p.classList.add('hidden');
        });
        inputInformasi.forEach((input) => {
            input.classList.remove('hidden');
        });
        selectInformasi.forEach((select) => {
            select.classList.remove('hidden');
        });
        buttonSimpan.classList.remove('hidden');
        buttonBatal.classList.remove('hidden');
        isInputing = true;
    } else {
        textInformasi.forEach((p) => {
            p.classList.remove('hidden');
        });
        inputInformasi.forEach((input) => {
            input.classList.add('hidden');
        });
        selectInformasi.forEach((select) => {
            select.classList.add('hidden');
        });
        buttonSimpan.classList.add('hidden');
        buttonBatal.classList.add('hidden');
        isInputing = false;
    }
});

// VIEW FULL PEKERJAAN
document.querySelectorAll('.arrow-toggle').forEach((arrow) => {
    arrow.addEventListener('click', () => {
        const deskripsi = arrow.closest('.pengalaman__content').querySelector('.pengalaman__content__deskripsi');

        if (deskripsi.classList.contains('max-h-8')) {
            deskripsi.classList.remove('max-h-8');
            deskripsi.classList.add('max-h-[1080px]');
        } else {
            deskripsi.classList.remove('max-h-[1080px]');
            deskripsi.classList.add('max-h-8');
        }

        arrow.classList.toggle('rotate-180');
    });
});


// MODAL
function trapFocus(modal) {
    const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    modal.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') {
            if (event.shiftKey) { 
                if (document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                }
            } else { // Tab
                if (document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        }
    });

    firstElement.focus();
}

const tambahPengalaman = document.getElementById('tambah__pengalaman');
const pengalamanModal = document.querySelector('.pengalaman__modal');
const closePengalamanModalButton = document.querySelector('.pengalaman__modal img');

const tambahSertifikasi = document.getElementById('tambah__sertifikasi');
const sertifikasiModal = document.querySelector('.sertifikasi__modal');
const closeSertifikasiModalButton = document.querySelector('.sertifikasi__modal img');

const tambahKeahlian = document.getElementById('tambah__keahlian');
const keahlianModal = document.querySelector('.keahlian__modal');
const closeKeahlianModalButton = document.querySelector('.keahlian__modal img');

const tambahPortofolio = document.getElementById('tambah__portofolio');
const portofolioModal = document.querySelector('.portofolio__modal');
const closePortofolioModalButton = document.querySelector('.portofolio__modal img');


const body = document.body;

function openModal(modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex', 'opacity-100');
    body.classList.add('overflow-hidden');
    trapFocus(modal); 
}

function closeModal(modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex', 'opacity-100');
    body.classList.remove('overflow-hidden'); 
}

tambahPengalaman.addEventListener('click', () => openModal(pengalamanModal));
closePengalamanModalButton.addEventListener('click', () => closeModal(pengalamanModal));

tambahSertifikasi.addEventListener('click', () => openModal(sertifikasiModal));
closeSertifikasiModalButton.addEventListener('click', () => closeModal(sertifikasiModal));

tambahKeahlian.addEventListener('click', () => openModal(keahlianModal));
closeKeahlianModalButton.addEventListener('click', () => closeModal(keahlianModal));

tambahPortofolio.addEventListener('click', () => openModal(portofolioModal));
closePortofolioModalButton.addEventListener('click', () => closeModal(portofolioModal));
