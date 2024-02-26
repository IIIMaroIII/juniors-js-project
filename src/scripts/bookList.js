// ========need class of BookListButton
const bookListButton = document.querySelector('.');
bookListButton.addEventListener('click', renderBooksByPageNumber(1));

// ========delete button======

const bookListMain = document.querySelector(".booklist");
bookListMain.addEventListener('click', getButtonId);

function getButtonId(e) {
  const selectedBookId = e.target.dataset.id; //add data- to btn
  deleteBookFromList(selectedBookId);
  //get number of page
  renderBooksByPageNumber(pageNumber);
}


function isBooksInLS() {
  const isBook = localStorage.getItem("books");
  const bookList = JSON.parse(isBook);
  return bookList;
};


function bookListPage(bookList) {
  refs.bookListPage.innerHTML = '<div class="booklist-section"><h1 class="booklist-title">Shopping <span class="booklist-title-span">List</span></h1><ul class="booklist"></ul>';
  if (!bookList) {
    // render empty page
  } else {
    renderBooksByPageNumber(1);
  };
};



function renderBooksByPageNumber(pageNumber) { 
  
  const bookList = isBooksInLS();
  const bookListOnPage = [];
  
  if (isMobile) { 
    const numberOfBooksOnPage = 4;
  } else { 
    const numberOfBooksOnPage = 3;
  };

  const n = numberOfBooksOnPage;

  if (!isLastPage(pageNumber, n)) { 
    for (let i = (pageNumber * n - n); i < (pageNumber * n); i += 1) {
      bookListOnPage.push(bookList[i]);
    }; 
  } else {
    for (let i = (pageNumber * n - n); i < (bookList.length - 1); i += 1) {
      bookListOnPage.push(bookList[i]);
    }; 
  };
    
  renderBookList(bookListOnPage);
    
};


function isLastPage(pageNumber, numberOfBooksOnPage) { 
  return pageNumber === Math.ceil(bookList.length / numberOfBooksOnPage);
};


function isMobile() { 
  return window.innerWidth <= 576;
};

function deleteBookFromList(id) {
  const bookList = isBooksInLS();
  const newBookList = bookList.filter(book => book.id !== id);
  const bookToDelete = refs.bookListPage.querySelector(`[data-id="${id}"]`);
  bookToDelete.remove();
  localStorage.removeItem("books");
  localStorage.setItem("books", JSON.stringify(newBookList));
};

// =================RENDER=======================//

function bookTemplate({ _id, author, title, book_image, description, buy_links, list_name }) { 
  const bookAmazon = buy_links.find(buy_link => buy_link.name === "Amazon");
  amazonBuyLink = bookAmazon.url;

  const bookApple = buy_links.find(buy_link => buy_link.name === "Apple Books");
  appleBuyLink = bookApple.url;

  return `
<li class="booklist-item" data-id="${_id}">
    <div class="booklist-item-image">
        <img class="booklist-image" src="${book_image}"
            alt="book cover" />
    </div>
    <div class="booklist-info-block">
        <div class="booklist-item-info">
            <h1>${title}</h1>
            <p class="booklist-list">${list_name}</p>
            <div class="description-box">
                <p class="booklist-description">${description}</p>
            </div>
        </div>
        <div class="booklist-item-links">
            <p class="booklist-author">${author}</p>
            <ul class="booklist-link-box">
                <li class="booklist-amazon">
                    <a class="booklist-amazon-link" href="${amazonBuyLink}"
                        target="_blank">Am</a>
                </li>
                <li class="booklist-apple">
                    <a class="booklist-apple-link" href="${ppleBuyLink}"
                        target="_blank">Ap</a>
                </li>
            </ul>

        </div>
    </div>
</li>`;
};



function renderBookList(bookList) { 
  const markup = bookList.map(bookTemplate).join('');
  const bookListSection = refs.bookListPage.querySelector('.booklist-section');
  bookListPage.insertAdjacentHTML('beforeend', markup);
}; 

// =============================================================//



