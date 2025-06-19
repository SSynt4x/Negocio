// form-validation.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const modal = document.getElementById('alertModal');
  const closeModalBtn = document.getElementById('closeModal');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // evitar envío automático

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === '' || password === '') {
      // Mostrar modal
      modal.style.display = 'flex';
    } else {
      // Enviar formulario si todo está correcto
      this.submit();
    }
  });

  closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});


