import sprite from '../img/sprite.svg';
// Burger menu
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const useElement = burgerMenu.querySelector('use');
const body = document.body;

burgerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  if (mobileMenu.classList.contains('active')) {
    body.style.overflow = 'hidden';
    useElement.setAttribute('xlink:href', `${sprite}#icon-x-close`);
  } else {
    body.style.overflow = 'auto';
    useElement.setAttribute('xlink:href', `${sprite}#icon-burger-menu-icon`);
  }
});
//====================

// Page theme change
const themeToggle = document.querySelector('.toggle-theme');
let isDarkMode = false;

themeToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  isDarkMode = !isDarkMode;
});
//=========================
