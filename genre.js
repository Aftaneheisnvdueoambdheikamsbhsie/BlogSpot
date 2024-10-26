const genreDropdown = document.getElementById('genreDropdown');
const sortDropdown = document.getElementById('sortDropdown');
const searchBar = document.getElementById('searchBar');
const movieCards = document.querySelectorAll('.movie-card');
const reviewButtons = document.querySelectorAll('.review-button');
const modal = document.getElementById('reviewModal');
const modalTitle = document.getElementById('movieTitle');
const modalReview = document.getElementById('movieReview');
const closeButton = document.querySelector('.close');
const burgerMenu = document.getElementById('burgerMenu');
const sideNav = document.getElementById('sideNav');

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


// Filter movies by genre
genreDropdown.addEventListener('change', () => {
    const selectedGenre = genreDropdown.value;
    movieCards.forEach(card => {
        const genre = card.getAttribute('data-genre');
        card.style.display = (selectedGenre === 'all' || genre === selectedGenre) ? 'block' : 'none';
    });
});

// Sort movies (sorting logic can be extended based on data structure)
sortDropdown.addEventListener('change', () => {
    console.log("Sorting movies by", sortDropdown.value);
});

// Search movies by title
searchBar.addEventListener('input', () => {
    const searchQuery = searchBar.value.toLowerCase();
    movieCards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        card.style.display = title.includes(searchQuery) ? 'block' : 'none';
    });
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
