document.addEventListener('DOMContentLoaded', function() {
    function toggleMenu() {
        const menu = document.getElementById('menu');
        const menuLabel = document.getElementById('menu-label');
        const burgerIcon = document.querySelector('.burger-icon');

        if (menu.classList.contains('hide-menu')) {
            menu.classList.remove('hide-menu');
            burgerIcon.innerHTML = '&#10006;';  // Change burger to 'X'
            menuLabel.innerText = 'Close';
        } else {
            menu.classList.add('hide-menu');
            burgerIcon.innerHTML = '&#9776;';  // Change 'X' back to burger
            menuLabel.innerText = 'Menu';
        }
    }

    // Attach the toggleMenu function to burger click
    document.querySelector('.burger').addEventListener('click', toggleMenu);
});
