import Axios from 'axios';

export class BooksAPI {
  constructor() {
    this.BASE_URL = 'https://books-backend.p.goit.global/books';
    this.CATEGORY_LIST = '/category-list';
    this.TOP_BOOKS = '/top-books';
    this.URL_CATEGORY = `/category?`;
  }
  async fetchCategoryList() {
    const url = this.BASE_URL + this.CATEGORY_LIST;
    try {
      const res = await Axios.get(url);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchTopBooks() {
    const url = this.BASE_URL + this.TOP_BOOKS;
    try {
      const res = await Axios.get(url);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchBookByID(id) {
    const url = `${this.BASE_URL}/${id}`;
    try {
      const res = await Axios.get(url);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchBooksBySelectedCategory(userSelectedCategory) {
    const queryCategory = new URLSearchParams();
    queryCategory.append('category', userSelectedCategory);
    const url = `${this.BASE_URL}${
      this.URL_CATEGORY
    }${queryCategory.toString()}`;

    try {
      const res = await Axios.get(url);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}

// ==============  List of steps

// ==============  Create a prototype of BooksAPI()

// const booksAPI = new BooksAPI();

// ==============  Method fetchCategoryList returns you a promise, therefore use then().catch() to receive the data of response.

// booksAPI
//   .fetchCategoryList()
//   .then(res => console.log(res[0]))
//   .catch(err => console.log(err));

// ==============  Method fetchTopBooks returns you a promise, therefore use then().catch() to receive the TOP 5 books of EACH CATEGORY.

// booksAPI
//   .fetchTopBooks()
//   .then(res => console.log(res[0].books[0]._id))
//   .catch(err => console.log(err));

// ==============  Method fetchBookByID returns you a promise, therefore use then().catch().
// ==============  also this method awaits as argument the ID of chose book as the string.

// booksAPI
//   .fetchBookByID('643282b1e85766588626a0dc')
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// ==============  Method fetchBooksBySelectedCategory returns you a promise, therefore use then().catch().
// ==============  also this method awaits as argument the CATEGORY NAME which user has choosen as the string.

// booksAPI
//   .fetchBooksBySelectedCategory('Advice How-To and Miscellaneous')
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
