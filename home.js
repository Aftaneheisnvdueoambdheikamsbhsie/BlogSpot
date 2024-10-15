document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form untuk submit secara default

    // Mengambil nilai dari form
    const fullname = document.getElementById('fullname').value;
    const nickname = document.getElementById('nickname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const address = document.getElementById('address').value;
    const captcha = document.getElementById('captcha').value;

    // Cek captcha
    if (captcha !== '5') {
        alert('Captcha tidak benar. Silakan coba lagi.');
        return;
    }

    // Simpan informasi pengguna ke localStorage (jika diperlukan)
    localStorage.setItem('user', JSON.stringify({ fullname, nickname, email, address }));

    // Menampilkan efek penuh layar
    const fullscreenEffect = document.createElement('div');
    fullscreenEffect.classList.add('fullscreen-effect');
    document.body.appendChild(fullscreenEffect);
    
    // Menampilkan efek penuh layar
    setTimeout(() => {
        fullscreenEffect.style.opacity = '1';

        // Menghilangkan efek setelah beberapa detik
        setTimeout(() => {
            fullscreenEffect.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(fullscreenEffect);
                document.getElementById('loading').style.display = 'flex'; // Menampilkan loading
            }, 500); // Menghapus elemen setelah animasi selesai
        }, 1000); // Durasi tampil penuh layar
    }, 500); // Delay sebelum menampilkan efek

    // Menampilkan dan mengaktifkan animasi burger
    const burgers = document.querySelectorAll('.burger');
    burgers.forEach(burger => {
        burger.classList.add('active'); // Tambahkan kelas aktif pada burger
    });

    // Menampilkan efek gelombang
    const waveAnimation = document.getElementById('wave-animation');
    waveAnimation.style.display = 'flex';

    // Menambahkan delay sebelum menampilkan loading
    setTimeout(() => {
        waveAnimation.style.display = 'none'; // Sembunyikan efek gelombang
    }, 1000); // Menampilkan gelombang selama 1 detik

    // Mengosongkan nilai semua input
    document.getElementById('fullname').value = '';
    document.getElementById('nickname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('address').value = '';
    document.getElementById('captcha').value = '';

    // Redirect ke halaman produk setelah loading
    setTimeout(() => {
        window.location.href = 'produk.html'; // Ganti dengan halaman produk
    }, 2000); // Waktu loading 2 detik
});

// Partikel efek di canvas
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let particles = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Partikel class
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

        // Pindahkan partikel ke sisi lain jika melewati batas
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

// Generate partikel
function init() {
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
    }
}

// Update dan gambar partikel
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
