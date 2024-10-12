// Toggle menu functionality
const burgerMenu = document.getElementById('burger-menu');
const menu = document.getElementById('menu');

burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('active');
    menu.classList.toggle('show-menu');
    const menuLabel = document.getElementById('menu-label');
    menuLabel.textContent = menu.classList.contains('show-menu') ? 'Close' : 'Menu';
});
