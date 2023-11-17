// Scroll to show the back-to-top button
const btt = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
        btt.style.display = 'block';
    }
    else {
        btt.style.display = 'none';
    }
})

// Nav__item change on scroll
const navItems = document.querySelectorAll('.nav__item');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navItems.forEach(navItem => {
                navItem.classList.remove('nav__item--active');
                if (navItem.href.includes(id)) {
                    navItem.classList.add('nav__item--active');
                }
            })
        }
    })
});

// Load oncroll
for (const section of sections) {
    section.setAttribute("data-aos", "fade-up");
}
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out',
    disableMutationObserver: false
});

// Number Loading
const numLoads = document.querySelectorAll('.facts__num');
for (const numLoad of numLoads) {
    numLoad.setAttribute("data-purecounter-end", numLoad.innerText);
}
new PureCounter({
    selector: '.facts__num',
    start: 0,
    once: true,
    duration: 1
});

// Progress Bar Loading
const progressBars = document.querySelectorAll('.progress-bar');
const skillsSection = document.getElementById('skills');
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let skillsOffSet = skillsSection.offsetTop - 650;
    if (scrollPosition >= skillsOffSet) {
        progressBars.forEach(pb => {
            pb.classList.add('progress-bar-animate');
        })
    }
})

/**
 * Tablet/Mobile Navbar
 */
const navbarButton = document.querySelector('.navbar-button');
const navbar = document.getElementById('nav');
const navbarButtonIcon = navbarButton.querySelector('i');
function navbarToggle() {
    navbar.classList.toggle('navbar--active');
    navbarButtonIcon.classList.toggle('fa-bars');
    navbarButtonIcon.classList.toggle('fa-xmark');
    navbarButton.classList.toggle('navbar-button--active');
    if (window.matchMedia('(max-width: 990px)').matches) {
        document.querySelector('html').classList.toggle('scroll-block');
    }
}
// Toggle Navbar when click navbarButton 
navbarButton.addEventListener('click', (e) => {
    e.stopPropagation();
    navbarToggle();
});
// Close navbar when click outside of navbar
document.addEventListener('click', (e) => {
    const clicked = e.target;
    if (!navbar.contains(clicked) && navbar.classList.contains('navbar--active')) {
        navbarToggle();
    }
});
// Close navbar when click navbar item
navItems.forEach(navItem => {
    navItem.addEventListener('click', navbarToggle);
})