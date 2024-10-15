// Sample data for comments
let comments = [];

// Function to display comments in the grid
function displayComments() {
    const reviewGrid = document.getElementById('reviewGrid');
    reviewGrid.innerHTML = ''; // Clear the grid before populating

    comments.forEach(comment => {
        const reviewCard = document.createElement('div');
        reviewCard.classList.add('review-card');

        reviewCard.innerHTML = `
            <img src="${comment.profilePic}" alt="Profile Picture">
            <div class="review-text">
                <h3>${comment.name}</h3>
                <p>${comment.comment}</p>
                <span class="rating">${getStars(comment.rating)}</span>
                <span>Date: ${comment.date}</span>
            </div>
        `;
        
        reviewGrid.appendChild(reviewCard);
    });
}

// Function to get stars based on rating
function getStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += `<span class="star">${i < rating ? '★' : '☆'}</span>`;
    }
    return stars;
}

// Handle form submission in comment-form.html
document.getElementById('commentSubmissionForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const commentText = document.getElementById('comment').value;
    const ratingValue = document.getElementById('rating').value;
    
    const newComment = {
        name: "Current User", // Replace with actual user name
        comment: commentText,
        date: new Date().toLocaleDateString(),
        profilePic: "user1.jpg", // Replace with actual profile picture
        rating: parseInt(ratingValue)
    };

    comments.push(newComment); // Add new comment to the comments array
    displayComments(); // Update the display
    document.getElementById('commentSubmissionForm').reset(); // Reset form
});
