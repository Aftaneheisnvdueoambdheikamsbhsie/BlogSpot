// home.js
document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burger-menu');
    const menu = document.getElementById('menu');
    
    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        menu.classList.toggle('show-menu');
        
        // Ubah label dari Menu ke Close
        const menuLabel = document.getElementById('menu-label');
        if (burgerMenu.classList.contains('active')) {
            menuLabel.textContent = 'Close';
        } else {
            menuLabel.textContent = 'Menu';
        }
    });
});
