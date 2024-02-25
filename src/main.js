import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const booskList = document.querySelector(".books-list");
const bookRow = document.querySelector(".book-row")
const URL = "https://books-backend.p.goit.global/books/top-books"

function fetchBook() {
    return fetch(URL).then((resp) => {
        
        if (!resp.ok) {
            throw new Error (resp.statusText)
        }

       return resp.json()
    })
}

fetchBook().then(data => {
    console.log(data);
    const markup = data.map(({books}) => renderBooks(books)).join("");
    bookRow.insertAdjacentHTML("beforeend", markup)
    console.log(markup)
}).catch(err => console.log(err));

function renderBooks({list_name,book_image}) {
    return `<li>
    <h2>${list_name}</h2>
    <img><img>
    </li>`
}

/*

  fetchBook().then(console.log);
        function galleryMarkup(arr) {
    return arr
        .map(
            ({ webformatURL,
                largeImageURL,
                tags,
                likes,
                views,
                comments,
                downloads, }) => `
  <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
    <p class= "gallery-descr">• Likes: ${likes} • Views: ${views} • Comments: ${comments} •</span> Downloads:${downloads}</p>
  </a>
</li>
  `)
    .join("")
}*/
