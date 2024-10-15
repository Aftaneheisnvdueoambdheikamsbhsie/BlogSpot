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
    
    burgerMenu.addEventListener('click', function(event) {
        // Toggle sidebar
        if (sidebarMenu.style.display === 'flex') {
            sidebarMenu.style.display = 'none';
        } else {
            sidebarMenu.style.display = 'flex';
        }
        
        // Mencegah event click diteruskan ke event listener lain (supaya sidebar tidak langsung tertutup)
        event.stopPropagation();
    });

    // Fungsi untuk menutup sidebar ketika mengeklik di luar sidebar
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = sidebarMenu.contains(event.target);
        const isClickBurgerIcon = burgerMenu.contains(event.target);
        
        // Tutup menu jika mengeklik di luar sidebar dan burger icon
        if (!isClickInsideMenu && !isClickBurgerIcon) {
            sidebarMenu.style.display = 'none';
        }
    });
});
