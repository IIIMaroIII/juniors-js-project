import { BooksSection } from './home-books';
import { CategoriesSection } from './home-categories';

const categoriesSection = new CategoriesSection();
const bookSection = new BooksSection();

categoriesSection.addEventListenerCategoryClick(onCategoryClick);

function onCategoryClick(categoryName) {
  bookSection.getBooksOfClickCategory(categoryName);
}

bookSection.addEventListenerBookClick(onBookClick);

function onBookClick(idBook) {
  console.log(idBook);
}
