// Burger menu
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

burgerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  if (mobileMenu.classList.contains('active')) {
    burgerMenu.src = './img/x-close.svg';
  } else {
    burgerMenu.src = './img/burger-menu-icon.svg';
  }
});

// Page theme change
const logoTextIcon = document.querySelector('.logo-text');
const burgerMenuIcon = document.querySelector('.burger-menu');
const themeToggle = document.querySelector('.toggle-theme');
let isDarkMode = false;
themeToggle.addEventListener('click', function () {
  if (isDarkMode) {
    themeToggle.src = './img/light.svg';
  } else {
    themeToggle.src = './img/dark.svg';
  }
  document.body.classList.toggle('dark-mode');
  isDarkMode = !isDarkMode;
});
