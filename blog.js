document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('#burger-menu');
    const menu = document.getElementById('menu');
    const menuLabel = document.getElementById('menu-label');

    function toggleMenu() {
        // Tampilkan atau sembunyikan menu
        menu.classList.toggle('show-menu');
        burger.classList.toggle('active'); // Tambahkan kelas active pada burger

        // Ganti teks menu saat menu terbuka/tertutup
        if (menu.classList.contains('show-menu')) {
            menuLabel.innerText = 'Close';
        } else {
            menuLabel.innerText = 'Menu';
        }
    }

    burger.addEventListener('click', toggleMenu);
});
