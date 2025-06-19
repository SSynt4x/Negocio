document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  function onScroll() {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top <= windowHeight * 0.9 && rect.bottom >= 0) {
        card.classList.add('fade-in-visible');
      }
    });
  }

  window.addEventListener('scroll', onScroll);
  onScroll(); // verificar al cargar
});
