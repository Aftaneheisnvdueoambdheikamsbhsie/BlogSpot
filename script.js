function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('hide-menu')) {
        menu.classList.remove('hide-menu');
    } else {
        menu.classList.add('hide-menu');
    }
}
