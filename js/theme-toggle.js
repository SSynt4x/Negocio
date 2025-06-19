const toggleButton = document.getElementById('themeToggle');
const icon = toggleButton.querySelector('i');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.querySelector('.navbar').classList.toggle('dark-mode');
  document.querySelector('.carousel').classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});




