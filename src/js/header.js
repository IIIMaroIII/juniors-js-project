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
//Active state for nav elements
function toggleActive(event) {
  // Remove 'active' class from any other item:
  const navItems = document.querySelectorAll('.header-nav-elem li a');
  navItems.forEach(item => item.classList.remove('is-active'));

  // Add 'active' class to the clicked item:
  event.target.closest('a').classList.add('is-active');
}
const navLinks = document.querySelectorAll('.header-nav-elem li a');
navLinks.forEach(link => link.addEventListener('click', toggleActive));

//====================
