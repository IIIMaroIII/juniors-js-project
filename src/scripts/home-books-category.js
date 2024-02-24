import { BooksSection } from './home-books';
import { CategoriesSection } from './home-categories';

const categoriesSection = new CategoriesSection();
const bookSection = new BooksSection();

categoriesSection.addEventListenerCategoryClick(onCategoryClick);

function onCategoryClick(categoryName) {
  bookSection.handleBooks(categoryName);
}
