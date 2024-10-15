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

    // Tampilkan loading
    document.getElementById('loading').style.display = 'flex';
    document.getElementById('login-form').style.display = 'none';

    // Redirect ke halaman produk setelah loading
    setTimeout(() => {
        window.location.href = 'produk.html';
    }, 2000); // Waktu loading 2 detik
});

