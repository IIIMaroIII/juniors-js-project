import { BooksAPI } from '../scripts/booksAPI';

export class BooksSection {
  constructor() {
    this.booksAPI = new BooksAPI();
    this.allCategoriesName = 'ALL CATEGORIES';
    this.bookClickCallback = null;
  }
  addEventListenerBookClick(callback) {
    if (typeof callback !== 'function') return;

    this.bookClickCallback = callback;
  }

  getBooksOfClickCategory(categoryName) {
    if (categoryName === this.allCategoriesName) {
      this.booksAPI
        .fetchBooksByCategory(categoryName)
        .then(res => {
          const randomBooks = this.getRandomBooksFromList(res, 5);
          console.log(randomBooks);
          if (this.bookClickCallback) {
            this.bookClickCallback(categoryName, randomBooks);
          }
        })
        .catch(err => console.error(err));
      return;
    }

    this.booksAPI
      .fetchBooksBySelectedCategory(categoryName)
      .then(res => {
        this.hideSection();
        console.log(res);
        this.renderListBooks(res);
        this.addBookListeners();
      })
      .catch(err => console.log(err));
  }

  renderListBooks(res) {
    const html = this.itemsTemplate(res);
    // document.getElementById('home-category-books-list').innerHTML = html;
    document.querySelector('.js-home-list').innerHTML = html;
  }

  itemsTemplate(items) {
    return items.map(this.itemTemplate).join('').trim();
  }

  itemTemplate(item) {
    const { book_image, author, _id, list_name, title, amazon_product_url } =
      item;
    return `
          <li class="book-item book-item-styles top-books-item" data-id="${_id}">  
           
          <div class="wrap-item-img top-books-link">
                  <div class="img-wrapper"><img class="book-img top-books-img" src="${book_image}" alt="" title=""/><div class="img-bgc">
                  <p class="img-bgc-text">QUICK VIEW</p>
</div></div>
                  <h3 class="info-item-name top-books-title">
                      ${title}
                  </h3>
                   <p class="info-item-author top-books-desc">
                      ${author}
                  </p>
              </div>
          </li>
      `;
  }

  addBookListeners() {
    const books = document.querySelectorAll('.book-item');

    books.forEach(book => {
      book.addEventListener('click', event => {
        this.handleBookClick(event);
      });
    });
  }

  handleBookClick(event) {
    const idBook = event.currentTarget.dataset.id;
    console.log(idBook);

    if (this.bookClickCallback) {
      this.bookClickCallback(idBook);
    }
  }
  hideSection() {
    const sectionToHide = document.querySelector('.home-page');
    // sectionToHide.style.display = 'none';
  }
}

//Hide on Mobile
export function hideExtraBooksOnMobile() {
  const bookLists = document.querySelectorAll('.home-list');

  bookLists.forEach(list => {
    const listItems = list.querySelectorAll('.home-list-item');

    // Hide all list items from the second one onwards
    for (let i = 1; i < listItems.length; i++) {
      listItems[i].classList.add('hide-on-mobile');
    }
  });
}
//============
