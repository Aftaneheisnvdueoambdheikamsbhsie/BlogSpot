document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('#burger-menu');
    const menu = document.getElementById('menu');
    const menuLabel = document.getElementById('menu-label');
    const burgerIcon = document.querySelector('.burger-icon');

    function toggleMenu() {
        if (menu.classList.contains('hide-menu')) {
            menu.classList.remove('hide-menu');
            burgerIcon.innerHTML = '&#10006;';  // Change to X
            menuLabel.innerText = 'Close';
        } else {
            menu.classList.add('hide-menu');
            burgerIcon.innerHTML = '&#9776;';  // Change back to burger
            menuLabel.innerText = 'Menu';
        }
    }

    burger.addEventListener('click', toggleMenu);
});
