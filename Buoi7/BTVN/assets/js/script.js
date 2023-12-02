// Slider show
let sliderItems = document.querySelectorAll('#home > div');
let slideContainer = document.querySelector('#home');
let curIdx = 0;

function nextSlide() {
    curIdx = (curIdx + 1) % sliderItems.length;
    for (const sliderItem of sliderItems) {
        sliderItem.classList.remove('open');
    }
    sliderItems[curIdx].classList.add('open');
}
setInterval(nextSlide, 5000);

// Ticket Modal
let buyBtns = document.querySelectorAll('.js-buy-btn');
let closeModalBtns = document.querySelectorAll('.js-close-btn');
let ticketModal = document.querySelector('.ticket-modal');
let ticketModalContent = document.querySelector('.modal-content');

function toggleTicketModal() {
    ticketModal.classList.toggle('modal--open');
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', toggleTicketModal);
}

for (const closeModalBtn of closeModalBtns) {
    closeModalBtn.addEventListener('click', toggleTicketModal);
}

ticketModal.addEventListener('click', toggleTicketModal);
ticketModalContent.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Mobile navbar
let mobileNavbarButton = document.querySelector('.js-mb-nav-btn');
let mobileNavbar = document.querySelector('.mb-nav');

mobileNavbarButton.addEventListener('click', () => {
    mobileNavbar.classList.toggle('open');
});

document.addEventListener('click', () => {
    if (mobileNavbar.classList.contains('open')) {
        mobileNavbar.classList.toggle('open');
    }
});

mobileNavbarButton.addEventListener('click', (e) => {
    e.stopPropagation();
});