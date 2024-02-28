import { BooksAPI } from "./booksAPI.js";

import { isLocal } from "./localSave.js"

const image = document.querySelector(".modal-img");
const bookTitle = document.querySelector(".book-title");
const bookAuthor = document.querySelector(".book-author");
const bookDescription = document.querySelector(".book-description");
const shopList = document.querySelector(".shops-links");
const addToShopList = document.querySelector(".save-to-list");

const textCongrats = document.querySelector(".shopping-list-message");

export function buildModal(bookId) {
  const Book = new BooksAPI;
  Book.fetchBookByID(bookId).then(value => constructModal(value))
};

async function constructModal(bookData) {
  const { _id, book_image, author, title, buy_links, description } = bookData;

  if (isLocal(_id)) {
    addToShopList.textContent = `REMOVE FROM SHOPPING LIST`;
  } else {
    addToShopList.textContent = `ADD TO SHOPPING LIST`;
    textCongrats.remove();
  }

  image.src = `${book_image}`;
  image.alt = `${_id}`;
  bookTitle.textContent = `${title}`;
  bookAuthor.textContent = `${author}`;
  bookDescription.textContent = `${description}`;
  const markup = buy_links.map((link) => {
    let a = `<li><a href="${link.url} class="link" target=”_blank”>`
    switch (link.name) {
      case "Amazon":
        a += `<img src="../img/shops/light-amazon.png" alt="${link.name}"></a></li>`;
        break;
      case "Apple Books":
        a += `<img src="../img/shops/light-apple.png" alt="${link.name}"></a></li>`;
        break;
      default:
        a += `<img src="../img/shops/no-image.png" alt="${link.name}"></a></li>`;
    }
    return a;
  })
  .join("");
  shopList.innerHTML = markup;
};
