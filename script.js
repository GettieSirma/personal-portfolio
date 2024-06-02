const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const moonIcon = document.getElementById('moon-icon');
  const sunIcon = document.getElementById('sun-icon');
  moonIcon.style.display = moonIcon.style.display === 'none'? 'block' : 'none';
  sunIcon.style.display = sunIcon.style.display === 'none'? 'block' : 'none';
});