import { BooksAPI } from '../scripts/booksAPI';
import { hideExtraBooksOnMobile } from './home-books';

const booksAPI = new BooksAPI();

const refs = {
  homeListRef: document.querySelector('.js-home-list'),
};

getRandomCategory();
getRandomCategory();
getRandomCategory();
getRandomCategory();

async function getRandomCategory() {
  try {
    renderHomeList();
  } catch (error) {
    console.error('Error in example usage:', error);
  }
}

async function renderHomeList() {
  const randomInteger = Math.floor(Math.random() * 10) + 4;
  const allCategories = await booksAPI.fetchTopBooks();
  const { list_name, books } = allCategories[`${randomInteger}`];
  const homeListItemEl = createHomeListItemEl();
  const categoryTitleEl = createTitleCategoryEl(list_name);
  const seeMoreBtnEl = createSeeMoreBtnEl();
  const topBooksListEl = createTopBooksListEl(books);
  homeListItemEl.appendChild(categoryTitleEl);
  homeListItemEl.appendChild(topBooksListEl);
  homeListItemEl.appendChild(seeMoreBtnEl);

  refs.homeListRef.appendChild(homeListItemEl);
}

function createHomeListItemEl() {
  const liEl = document.createElement('li');
  liEl.classList.add('home-list-item');
  return liEl;
}

function createSeeMoreBtnEl() {
  const btnEl = document.createElement('button');
  btnEl.classList.add('see-more');
  btnEl.classList.add('js-see-more');
  btnEl.setAttribute('type', 'button');
  btnEl.setAttribute('id', 'see-more');

  btnEl.textContent = 'See More';
  return btnEl;
}

function createTitleCategoryEl(name) {
  const titleCategoryEl = document.createElement('h2');
  titleCategoryEl.classList.add('top-books-category-title');
  titleCategoryEl.textContent = `${name}`;
  return titleCategoryEl;
}

function createTopBooksListEl(arr) {
  const topBooksEl = document.createElement('ul');
  topBooksEl.classList.add('top-books-list');
  const topBooksItemMarkup = arr
    .map(
      ({
        amazon_product_url,
        author,
        book_image,
        description,
        title,
        ...rest
      }) => {
        return `<li class="top-books-item">
   <a href='${amazon_product_url}' target="_blank" class="top-books-link">
     <img src="${book_image}" alt="${title}" class="top-books-img" />
     <h3 class="top-books-title">${title}</h3>
     <p class="top-books-desc">${author}</p>
   </a>
 </li>`;
      }
    )
    .join('')
    .trim();
  topBooksEl.innerHTML = topBooksItemMarkup;
  return topBooksEl;
}
