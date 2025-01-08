document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada correctamente');
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    const closeBtn = document.querySelector('.menu-close');
    menu.classList.add('active');
    closeBtn.style.display = 'block';
});

document.querySelector('.menu-close').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.classList.remove('active');
    this.style.display = 'none';
});

document.addEventListener('click', function(event) {
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    
    if (!menu.contains(event.target) && !menuToggle.contains(event.target) && !menuClose.contains(event.target)) {
        menu.classList.remove('active');
        menuClose.style.display = 'none';
    }
});