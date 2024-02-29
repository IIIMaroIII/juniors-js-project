import { BooksSection } from './home-books';
import { CategoriesSection } from './home-categories';
import { BooksAPI } from '../scripts/booksAPI';
const booksAPI = new BooksAPI();
const categoriesSection = new CategoriesSection();
const bookSection = new BooksSection();

categoriesSection.addEventListenerCategoryClick(onCategoryClick);

const homeListRef = document.querySelector('.js-home-list');
homeListRef.addEventListener('click', onSeeMoreButtonClick);

async function onSeeMoreButtonClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const title = e.target.previousSibling.previousSibling.textContent;
  const objectByTitle = await booksAPI.fetchBooksBySelectedCategory(title);
  const html = bookSection.itemsTemplate(objectByTitle);
  document.querySelector('.js-home-list').innerHTML = html;
}

function onCategoryClick(categoryName) {
  bookSection.getBooksOfClickCategory(categoryName);
}

bookSection.addEventListenerBookClick(onBookClick);

const allCategoriesEl = document.querySelector('.home-all-categories');
allCategoriesEl.addEventListener('click', () => {
  const randomCategory = categoriesSection.getRandomCategory();
  bookSection.getBooksOfClickCategory(randomCategory);
});

function onBookClick(idBook) {
  console.log(idBook);
}

//Active state for categories
function toggleCategoryActive(event) {
  // Remove 'active-state' from any other category and "All Categories":
  const categories = document.querySelectorAll(
    '.categories-list .home-category-item, .home-all-categories'
  );
  categories.forEach(category => category.classList.remove('active-state'));

  // Add 'active-state' class to the clicked category:
  event.target.closest('.home-category-item').classList.add('active-state');
}

// Attach event listeners to categories
const categoryLinks = document.querySelectorAll(
  '.categories-list .home-category-item'
);
categoryLinks.forEach(link =>
  link.addEventListener('click', toggleCategoryActive)
);

//============================
