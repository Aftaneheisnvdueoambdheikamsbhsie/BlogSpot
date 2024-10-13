document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.getElementById('menu-items');
    const scrollRightBtn = document.getElementById('scroll-right');
    const scrollLeftBtn = document.getElementById('scroll-left');

    scrollRightBtn.addEventListener('click', function() {
        menuItems.scrollBy({ left: 100, behavior: 'smooth' });
    });

    scrollLeftBtn.addEventListener('click', function() {
        menuItems.scrollBy({ left: -100, behavior: 'smooth' });
    });
});
