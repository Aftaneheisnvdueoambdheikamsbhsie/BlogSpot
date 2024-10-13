document.addEventListener('DOMContentLoaded', function() {
    // Scroll Menu
    const menuItems = document.getElementById('menu-items');
    const scrollRightBtn = document.getElementById('scroll-right');
    const scrollLeftBtn = document.getElementById('scroll-left');

    scrollRightBtn.addEventListener('click', function() {
        menuItems.scrollBy({ left: 100, behavior: 'smooth' });
    });

    scrollLeftBtn.addEventListener('click', function() {
        menuItems.scrollBy({ left: -100, behavior: 'smooth' });
    });

    // Burger Menu untuk memunculkan sidebar
    const burgerMenu = document.querySelector('.burger-icon');
    const sidebarMenu = document.getElementById('sidebar-menu');

    burgerMenu.addEventListener('click', function() {
        if (sidebarMenu.style.display === 'flex') {
            sidebarMenu.style.display = 'none';
        } else {
            sidebarMenu.style.display = 'flex';
        }
    });
});
