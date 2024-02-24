// Burger menu
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const useElement = burgerMenu.querySelector('use');
burgerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  if (mobileMenu.classList.contains('active')) {
    useElement.setAttribute('xlink:href', '../img/sprite.svg#icon-x-close');
  } else {
    useElement.setAttribute(
      'xlink:href',
      '../img/sprite.svg#icon-burger-menu-icon'
    );
  }
});
//====================
// Page theme change
const logoTextIcon = document.querySelector('.logo-text');
const burgerMenuIcon = document.querySelector('.burger-menu');
const themeToggle = document.querySelector('.toggle-theme');
let isDarkMode = false;
themeToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  isDarkMode = !isDarkMode;
});
//=========================
