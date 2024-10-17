// Check if this is the first visit
const isFirstVisit = !localStorage.getItem('hasVisited');

if (isFirstVisit) {
    // Display the loading screen with the burger emoji
    const loading = document.getElementById('loading');
    const burgerEmoji = document.querySelector('.emoji');

    // Show loading screen
    loading.style.display = 'flex'; 
    burgerEmoji.style.display = 'block'; 

    // After 2 seconds, hide the loading screen and show the login form
    setTimeout(() => {
        loading.style.display = 'none'; // Hide the loading screen
        document.getElementById('login-container').style.display = 'block'; // Show login form

        // Mark that the user has visited
        localStorage.setItem('hasVisited', true);
    }, 2000); // 2 seconds loading
} else {
    // If it's not the first visit, just show the login form immediately
    document.getElementById('login-container').style.display = 'block';
}

// Handling login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const fullname = document.getElementById('fullname').value;
    const nickname = document.getElementById('nickname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const address = document.getElementById('address').value;
    const captcha = document.getElementById('captcha').value;

    // Check captcha
    // Array of images with corresponding numbers
const captchaImages = [
    { img: 'angka2.png', value: 2 },
    { img: 'angka0.png', value: 0 },
    { img: 'angka5.png', value: 5 }
];

// Randomly pick 3 images
const randomImages = [];
while (randomImages.length < 3) {
    const randomImage = captchaImages[Math.floor(Math.random() * captchaImages.length)];
    if (!randomImages.includes(randomImage)) {
        randomImages.push(randomImage);
    }
}

// Display the random images
const captchaContainer = document.getElementById('captcha-images');
captchaContainer.innerHTML = ''; // Clear existing images
randomImages.forEach(imgObj => {
    const imgElement = document.createElement('img');
    imgElement.src = imgObj.img;
    imgElement.alt = imgObj.value;
    imgElement.classList.add('captcha-img');
    captchaContainer.appendChild(imgElement);
});

// Generate the random math question
const question = `What is ${randomImages[0].value} + ${randomImages[1].value} * ${randomImages[2].value}?`;
document.querySelector('.captcha label').innerText = "Captcha: " + question;

// Check answer on form submit
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const correctAnswer = randomImages[0].value + randomImages[1].value * randomImages[2].value;
    const userAnswer = document.getElementById('captcha').value;

    if (parseInt(userAnswer) !== correctAnswer) {
        alert('Captcha tidak benar. Silakan coba lagi.');
        return;
    }

    // Proceed with form submission
    alert('Login berhasil!');
});


    // Save user information to localStorage (if needed)
    localStorage.setItem('user', JSON.stringify({ fullname, nickname, email, address }));

    // Show fullscreen effect
    const fullscreenEffect = document.createElement('div');
    fullscreenEffect.classList.add('fullscreen-effect');
    document.body.appendChild(fullscreenEffect);
    
    // Animate fullscreen effect
    setTimeout(() => {
        fullscreenEffect.style.opacity = '1';

        // Remove effect after some time
        setTimeout(() => {
            fullscreenEffect.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(fullscreenEffect);
                document.getElementById('loading').style.display = 'flex'; // Show loading again
            }, 500); // Remove element after animation
        }, 1000); // Fullscreen duration
    }, 500); // Delay before showing effect

    // Show wave effect
    const waveAnimation = document.getElementById('wave-animation');
    waveAnimation.style.display = 'flex';

    // Hide wave effect after delay
    setTimeout(() => {
        waveAnimation.style.display = 'none'; // Hide wave after 1 second
    }, 1000); 

    // Clear all input values
    document.getElementById('fullname').value = '';
    document.getElementById('nickname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('address').value = '';
    document.getElementById('captcha').value = '';

    // Redirect to product page after loading
    setTimeout(() => {
        window.location.href = 'produk.html'; // Change to your product page
    }, 2000); // 2 seconds loading
});

// Particle effect in canvas
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let particles = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Particle class
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size < 0.1) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 5 + 1;
        }
    }

    draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Generate particles
function init() {
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
    }
}

// Update and draw particles
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();
