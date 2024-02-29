// ========need class of BookListButton
const body = document.body;
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const useElement = burgerMenu.querySelector('use');
const mobileMenuDiv = document.querySelector('.mobile-menu');
const shoppingListButton = document.querySelector('.menu-item-shop');
const shoppingListButtonMobile = document.querySelector(
  '.menu-item-shop.mobile'
);

shoppingListButton.addEventListener('click', onShoppingListButton);
shoppingListButtonMobile.addEventListener('click', onShoppingListButton);
const headerNav = document.querySelector('.header-nav');
// const headerMobileNav = document.querySelector('.mobile-menu-nav');
headerNav.addEventListener('click', onShoppingListOpened);

const emptyShoppingListMarkup = ` 
        <li class="empty-item">

            <p class="empty-title">This page is empty, add some books and proceed to order.</p>
            <img class="empty-image" src="${emptyListImg}" alt="books">
        </li> `;

function onShoppingListButton(e) {
  e.preventDefault();
  mobileMenuDiv.classList.remove('active');
  body.style.overflow = 'auto';
  useElement.setAttribute('xlink:href', `${sprite}#icon-burger-menu-icon`);
  let pageNumber = 1;

  const sidebar = document.querySelector('.home-sidebar-nav-categories');
  sidebar.style.display = 'none';

  const screenWidth = window.innerWidth;
  const supportElem = document.querySelector('.support');
  const sideBarContainer = document.querySelector('.side-bar-container');
  if (screenWidth < 1440) {
    supportElem.style.display = 'none';
    sideBarContainer.style.display = 'none';
  }

  const homePage = document.querySelector('.home-page');
  homePage.innerHTML =
    '<h1 class="booklist-title">Shopping <span class="booklist-title-span">List</span></h1>';

  const bookListTytle = document.querySelector('.booklist-title');
  const startMarkup = `<div class="booklist-section"><ul class="booklist"></ul></div>`;
  bookListTytle.insertAdjacentHTML('afterend', startMarkup);

  const bookList = isBooksInLS();

  if (bookList.length < 1) {
    const bookListSection = document.querySelector('.booklist');
    bookListSection.insertAdjacentHTML('beforeend', emptyShoppingListMarkup);
  } else {
    renderBooksByPageNumber(pageNumber);
  }
}

function onShoppingListOpened(e) {
  // e.preventDefault();
  const isShoppingListElem = e.target.innerHTML === 'Shopping List';
  // const isBookshelfElem = e.target.dataset;
  const isHomeElem = e.target.innerHTML === 'Home';

  // console.log(e.target.innerHTML === "Shopping List");
  // console.log(e.target.innerHTML === "Home");
  if (isShoppingListElem || isHomeElem) {
    const supportElem = document.querySelector('.support');
    supportElem.classList.toggle('shopping-list-opened');
  }

  // console.log(isBookshelfElem);
  // console.log(isHomeElem);
}

function renderBooksByPageNumber(pageNumber) {
  const bookList = isBooksInLS();
  const bookListOnPage = [];
  let numberOfBooksOnPage;
  const screenWidth = window.innerWidth;
  if (screenWidth < 767) {
    numberOfBooksOnPage = 4;
  } else {
    numberOfBooksOnPage = 3;
  }

  let n = numberOfBooksOnPage;

  if (!isLastPage(pageNumber, n)) {
    for (let i = pageNumber * n - n; i < pageNumber * n; i += 1) {
      bookListOnPage.push(bookList[i]);
    }
  } else {
    for (let i = pageNumber * n - n; i < bookList.length; i += 1) {
      bookListOnPage.push(bookList[i]);
    }
  }

  renderBookList(bookListOnPage);
}

// // ========delete button======

const homePage = document.querySelector('.home-page');
homePage.addEventListener('click', getButtonId);

function getButtonId(e) {
  const isDeleteButtonPressed = e.target.parentElement.nodeName === 'BUTTON';

  if (isDeleteButtonPressed) {
    const selectedBookId = e.target.parentElement.dataset.id;
    deleteBookFromList(selectedBookId);
  } else {
  }
}

// ==============================

function isBooksInLS() {
  const isBook = localStorage.getItem('Shopping');
  const bookList = JSON.parse(isBook);
  return bookList;
}

function isLastPage(pageNumber, numberOfBooksOnPage) {
  const bookList = isBooksInLS();
  return pageNumber === Math.ceil(bookList.length / numberOfBooksOnPage);
}

function isMobile() {
  return window.innerWidth <= 767;
}

function deleteBookFromList(id) {
  const bookList = isBooksInLS();
  const newBookList = bookList.filter(book => book._id != id);
  const bookToDelete = document.querySelector(`[data-id="${id}"]`);
  bookToDelete.remove();
  localStorage.removeItem('Shopping');
  localStorage.setItem('Shopping', JSON.stringify(newBookList));
  const isClear = isBooksInLS();
  if (isClear.length < 1) {
    const bookListSection = document.querySelector('.booklist');
    bookListSection.insertAdjacentHTML('beforeend', emptyShoppingListMarkup);
  }
}

// =================RENDER=======================//

function bookTemplate({
  _id,
  author,
  title,
  book_image,
  description,
  buy_links,
  list_name,
}) {
  const bookAmazon = buy_links.find(buy_link => buy_link.name === 'Amazon');
  const amazonBuyLink = bookAmazon.url;
  const id = _id;
  const bookApple = buy_links.find(buy_link => buy_link.name === 'Apple Books');
  const appleBuyLink = bookApple.url;
  return `
<li class="booklist-item" data-id="${_id}">
    <div class="booklist-item-image">
        <img class="booklist-image" src="${book_image}"
            alt="book cover" />
    </div>
    <div class="booklist-info-block">
        <div class="booklist-item-info">
            <div class="item-high-box">
                <div class="title-box">
                    <h1>${title}</h1>
                    <p class="booklist-list">${list_name}</p>
                </div>
                <button type="button" class="booklist-delete-btn" data-id="${_id}">
                    <img src="${trashbinImg}" class="trash-icon" width="34" height="34">
                </button> 
            </div>
            <div class="description-box">
                <p class="booklist-description">${description}</p>
            </div>
        </div>
        <div class="booklist-item-links">
            <p class="booklist-author">${author}</p>
            <ul class="booklist-link-box">
                <li class="booklist-amazon">
                    <a class="booklist-amazon-link" href="${amazonBuyLink}"
                        target="_blank"><img src="${imgAmazon}" alt=""></a>
                </li>
                <li class="booklist-apple">
                    <a class="booklist-apple-link" href="${appleBuyLink}"
                        target="_blank"><img src="${imgApple}" alt=""></a>
                </li>
            </ul>

        </div>
    </div>
</li>`;
}

function renderBookList(bookList) {
  const markup = bookList.map(bookTemplate).join('').trim();
  const bookListSection = document.querySelector('.booklist');
  bookListSection.insertAdjacentHTML('beforeend', markup);
}

// ==================================================

// ======
