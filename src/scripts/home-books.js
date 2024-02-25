import { BooksAPI } from './booksAPI';

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
    // also this logic in button HOME

    if (categoryName === this.allCategoriesName) {
      this.booksAPI
        .fetchTopBooks()
        .then(res => console.log(res))
        .catch(err => console.log(err));
      return;
    }

    this.booksAPI
      .fetchBooksBySelectedCategory(categoryName)
      .then(res => {
        console.log(res);
        this.renderListBooks(res);
        this.addBookListeners();
      })
      .catch(err => console.log(err));
  }

  renderListBooks(res) {
    const html = this.itemsTemplate(res);
    document.getElementById('books-list').innerHTML = html;
  }

  itemsTemplate(items) {
    return items.map(this.itemTemplate).join('');
  }

  itemTemplate(item) {
    const { book_image, author, _id } = item;
    return `
          <li class="book-item" data-id="${_id}">
              <a class="link-item" href=""><img class="book-img" src="${book_image}" alt="" title=""/></a>
              <div class="info">
                  <p class="info-item"><b>Author</b><br>${author}</p>
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
    // console.log(idBook);

    if (this.bookClickCallback) {
      this.bookClickCallback(idBook);
    }
  }
}
