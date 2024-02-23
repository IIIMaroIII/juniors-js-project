import { BooksAPI } from './scripts/booksAPI';
const booksAPI = new BooksAPI();

booksAPI
  .fetchCategoryList()
  .then(res => console.log(res[0]))
  .catch(err => console.log(err));
