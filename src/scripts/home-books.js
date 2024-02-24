import { BooksAPI } from './booksAPI';

export class BooksSection {
  constructor() {
    this.booksAPI = new BooksAPI();
    this.allCategoriesName = 'ALL CATEGORIES';
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
          <li class="book-item" id="${_id}">
              <a class="link-item" href="${book_image}"><img class="book-img" src="${book_image}" alt="" title=""/></a>
              <div class="info">
                  <p class="info-item"><b>Author</b><br>${author}</p>
              </div>
          </li>
      `;
  }

  handleBooks(categoryName) {
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
      })
      .catch(err => console.log(err));
  }
}
