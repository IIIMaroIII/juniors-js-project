import { BooksAPI } from '../scripts/booksAPI';

export class CategoriesSection {
  constructor() {
    this.booksAPI = new BooksAPI();
    this.allCategoriesName = 'ALL CATEGORIES';

    const allCategoriesEl = document.querySelector('.home-all-categories');
    allCategoriesEl.dataset.categoryName = this.allCategoriesName;
    allCategoriesEl.addEventListener('click', this.handleCategoryClick);

    this.getCategories();
    this.categoryClickCallback = null;
  }

  addEventListenerCategoryClick(callback) {
    if (typeof callback !== 'function') return;

    this.categoryClickCallback = callback;
  }

  getCategories() {
    this.booksAPI
      .fetchCategoryList()
      .then(res => {
        this.renderListCategory(res);
        this.addCategoriesListeners();
      })
      .catch(err => console.log(err));
  }

  renderListCategory(res) {
    const html = this.itemsTemplate(res);
    document.getElementById('categories-list').innerHTML = html;
  }

  itemsTemplate(items) {
    return items.map(this.itemTemplate).join('');
  }

  itemTemplate(item) {
    const { list_name } = item;
    return `
              <li class="home-category-item item-style">
                  <div class="list-item" data-category-name="${list_name}">${list_name}</div>
              </li>
          `;
  }

  addCategoriesListeners() {
    const categories = document.querySelectorAll('.list-item');

    categories.forEach(categoryEl => {
      categoryEl.addEventListener('click', event => {
        this.handleCategoryClick(event);
      });
    });
  }

  handleCategoryClick(event) {
    const categoryName = event.currentTarget.dataset.categoryName;
    console.log(categoryName);

    const categoryDisplay = document.getElementById('categoryDisplay');

    categoryDisplay.textContent = categoryName;

    if (this.categoryClickCallback) {
      this.categoryClickCallback(categoryName);
    }
  }
  getRandomCategory() {
    const categories = document.querySelectorAll('.list-item');
    const randomIndex = Math.floor(Math.random() * categories.length);
    const randomCategoryName = categories[randomIndex].dataset.categoryName;
    return randomCategoryName;
  }
}
