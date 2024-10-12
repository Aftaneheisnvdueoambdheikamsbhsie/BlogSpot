document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('#burger-menu');
    const menu = document.getElementById('menu');
    const menuLabel = document.getElementById('menu-label');
    const burgerLines = document.querySelectorAll('.line');

    function toggleMenu() {
        if (menu.classList.contains('show-menu')) {
            menu.classList.remove('show-menu');
            burger.classList.remove('active'); // Remove "x"
            menuLabel.innerText = 'Menu';
        } else {
            menu.classList.add('show-menu');
            burger.classList.add('active'); // Turn burger into "x"
            menuLabel.innerText = 'Close';
        }
    }

    burger.addEventListener('click', toggleMenu);
});
