// Función para obtener cookie
function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

// Función para establecer cookie
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/";
}

// Aplicar tema
function applyTheme(theme) {
  const body = document.body;
  const navbar = document.querySelector('.navbar');
  const carousel = document.querySelector('.carousel');
  const toggleButton = document.getElementById('themeToggle');
  const icon = toggleButton?.querySelector('i');

  if (theme === 'dark') {
    body.classList.add('dark-mode');
    navbar?.classList.add('dark-mode');
    carousel?.classList.add('dark-mode');
    if (icon) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  } else {
    body.classList.remove('dark-mode');
    navbar?.classList.remove('dark-mode');
    carousel?.classList.remove('dark-mode');
    if (icon) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // === Tema ===
  const savedTheme = getCookie('theme');
  if (savedTheme) applyTheme(savedTheme);

  const toggleButton = document.getElementById('themeToggle');
  toggleButton?.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    setCookie('theme', newTheme, 365);
  });

  // === Cookies ===
  const consent = getCookie('cookieConsent');
  const cookieConsentDiv = document.getElementById('cookieConsent');
  const acceptBtn = document.getElementById('acceptCookies');

  if (!consent && cookieConsentDiv && acceptBtn) {
    cookieConsentDiv.style.display = 'block';

    acceptBtn.addEventListener('click', () => {
      setCookie('cookieConsent', 'accepted', 365);
      cookieConsentDiv.style.display = 'none';
    });
  }
});
