document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('#burger-menu');
    const menu = document.getElementById('menu');
    const menuLabel = document.getElementById('menu-label');
    const burgerIcon = document.querySelector('.burger-icon');

    function toggleMenu() {
        menu.classList.toggle('hide-menu'); // Toggle visibility of the menu
        menu.classList.toggle('show-menu'); // Show menu if hidden

        // Change icon and label based on menu state
        if (menu.classList.contains('hide-menu')) {
            burgerIcon.innerHTML = '&#9776;';  // Change back to burger
            menuLabel.innerText = 'Menu';
        } else {
            burgerIcon.innerHTML = '&#10006;';  // Change to X
            menuLabel.innerText = 'Close';
        }
    }

    burger.addEventListener('click', toggleMenu);
});
