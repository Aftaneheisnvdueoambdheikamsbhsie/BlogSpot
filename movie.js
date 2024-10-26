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
// Open modal for movie review
reviewButtons.forEach(button => {
    button.addEventListener('click', () => {
        const movieTitle = button.getAttribute('data-movie');
        modalTitle.innerText = movieTitle;

        // Add review content for each movie
        if (movieTitle === "Eclipse of Tomorrow") {
            modalReview.innerText = `*Eclipse of Tomorrow* membawa kita ke tahun 2049, di mana umat manusia berada di ambang kehancuran akibat perubahan iklim dan ketegangan geopolitik. Dibintangi oleh Emily Blunt dan Oscar Isaac, film ini menampilkan alur cerita yang mendalam dengan visual futuristik yang memukau. Rating: ⭐⭐⭐⭐⭐ (5/5)`;
        } else {
            modalReview.innerText = `This is a sample review for ${movieTitle}. Add more details here.`;
        }

        modal.style.display = 'flex';
    });
});

// Close modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});



