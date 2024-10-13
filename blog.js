document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('#burger-menu');
    const menu = document.getElementById('menu');
    const menuLabel = document.getElementById('menu-label');

    function toggleMenu() {
        // Mengatur kelas 'active' untuk burger
        burger.classList.toggle('active');

        // Menampilkan menu dan mengubah ikon
        if (menu.classList.contains('hide-menu')) {
            menu.classList.remove('hide-menu');
            menu.classList.add('show-menu');
            menuLabel.innerText = 'Close';
        } else {
            menu.classList.add('hide-menu');
            menu.classList.remove('show-menu');
            menuLabel.innerText = 'Menu';
        }
    }

    burger.addEventListener('click', toggleMenu);
});
