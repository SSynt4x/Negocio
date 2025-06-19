document.addEventListener('DOMContentLoaded', () => {
  const fadeTitle = document.querySelector('.fade-in-title');

  function onScroll() {
    if (!fadeTitle) return;

    const rect = fadeTitle.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight * 0.9) {
      fadeTitle.classList.add('visible');
      window.removeEventListener('scroll', onScroll);
    }
  }

  window.addEventListener('scroll', onScroll);
  onScroll(); // también chequea al cargar la página
});




document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in-title');

  function revealOnScroll() {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Para activarlo al cargar la página
});


document.addEventListener('DOMContentLoaded', () => {
  const fadeInCards = document.querySelectorAll('.fade-in-card');

  function revealCardsOnScroll() {
    fadeInCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        card.classList.add('fade-in-visible');
      }
    });
  }

  window.addEventListener('scroll', revealCardsOnScroll);
  revealCardsOnScroll(); // para activar al cargar si ya están visibles
});
