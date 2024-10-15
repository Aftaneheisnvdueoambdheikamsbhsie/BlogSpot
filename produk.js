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
    const body = document.body;
    
    burgerMenu.addEventListener('click', function() {
        if (sidebarMenu.style.display === 'flex') {
            sidebarMenu.style.display = 'none';
        } else {
            sidebarMenu.style.display = 'flex';
        }
    });
});
// Fungsi untuk menutup sidebar ketika mengeklik di luar sidebar
document.addEventListener('click', (event) => {
    const isClickInsideMenu = sidebarMenu.contains(event.target);
    const isClickBurgerIcon = burger.contains(event.target);
    
    if (!isClickInsideMenu && !isClickBurgerIcon) {
        sidebarMenu.style.display = 'none'; // Tutup menu jika mengeklik di luar
    }
});
