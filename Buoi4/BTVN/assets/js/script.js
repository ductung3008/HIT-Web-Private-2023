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