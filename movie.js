let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const burgerMenu = document.getElementById('burgerMenu');
const navLinks = document.getElementById('navLinks');

document.querySelector('.next').addEventListener('click', () => {
    changeSlide(1);
});

document.querySelector('.prev').addEventListener('click', () => {
    changeSlide(-1);
});
function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Show/hide menu on burger icon click
burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside of it
window.addEventListener('click', (event) => {
    if (!burgerMenu.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});


