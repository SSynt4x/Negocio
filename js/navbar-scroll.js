// navbar-scroll.js
let lastScrollTop = 0;
const navbar = document.querySelector('.custom-navbar');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll hacia abajo -> ocultar navbar
    navbar.style.top = '-80px'; // ajusta según la altura de tu navbar
  } else {
    // Scroll hacia arriba -> mostrar navbar
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
});
