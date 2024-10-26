let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const burgerMenu = document.getElementById('burgerMenu');
const sideNav = document.getElementById('sideNav');

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
// Show/hide sidebar on burger icon click
burgerMenu.addEventListener('click', () => {
    sideNav.classList.toggle('active');
});

// Close sidebar when clicking outside of it
window.addEventListener('click', (event) => {
    if (!burgerMenu.contains(event.target) && !sideNav.contains(event.target)) {
        sideNav.classList.remove('active');
    }
});



