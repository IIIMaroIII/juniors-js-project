// ========need class of BookListButton
const shoppingListButton = document.querySelector('.menu-item-shop');
shoppingListButton.addEventListener('click', onShoppingListButton);

const emptyShoppingListMarkup = ` 
        <li class="empty-item">
            <p class="empty-title">This page is empty, add some books and proceed to order.</p>
            <img class="empty-image" src="/src/img/shopping-list-books.png" alt="books">
        </li> `;

        


function onShoppingListButton(e) {
    e.preventDefault();

    let pageNumber = 1;

    console.log(isMobile());
    const sidebar = document.querySelector('.home-sidebar-nav-categories');
    sidebar.style.display = "none";
    
    const homePage = document.querySelector('.home-page');
    homePage.innerHTML = '<h1 class="booklist-title">Shopping <span class="booklist-title-span">List</span></h1>';
    
    const bookListTytle = document.querySelector('.booklist-title');
    const startMarkup = `<div class="booklist-section"><ul class="booklist"></ul></div>`;
    bookListTytle.insertAdjacentHTML('afterend', startMarkup);
    
    const bookList = isBooksInLS();
    console.log(bookList);

    if (bookList.length < 1) {
        const bookListSection = document.querySelector('.booklist');
        bookListSection.insertAdjacentHTML('beforeend', emptyShoppingListMarkup);
    } else {
        
        renderBooksByPageNumber(pageNumber);
    };
}


function renderBooksByPageNumber(pageNumber) {
    console.log('start');
    const bookList = isBooksInLS();
    const bookListOnPage = [];
    let numberOfBooksOnPage;

    if (isMobile()) {
        numberOfBooksOnPage = 4;
    } else { 
        numberOfBooksOnPage = 3;
    };
    
    let n = numberOfBooksOnPage;

    console.log('number of books =', numberOfBooksOnPage);

    if (!isLastPage(pageNumber, n)) {
        for (let i = (pageNumber * n - n); i < (pageNumber * n); i += 1) {
        bookListOnPage.push(bookList[i]);
    }; 
    } else {
        for (let i = (pageNumber * n - n); i < (bookList.length); i += 1) {
        bookListOnPage.push(bookList[i]);
    }; 
    };
    
    renderBookList(bookListOnPage);
    
};

// // ========delete button======

const homePage = document.querySelector('.home-page');
homePage.addEventListener('click', getButtonId);

function getButtonId(e) {
    const isDeleteButtonPressed = e.target.classList.contains("booklist-delete-btn");
    if (isDeleteButtonPressed) { 
        console.log('yes');
        const selectedBookId = e.target.dataset.id;
        console.log(selectedBookId);
        deleteBookFromList(selectedBookId);
    } else { 
        console.log('no');
    };
};

// ==============================


function isBooksInLS() {
    const isBook = localStorage.getItem("Shopping");
    const bookList = JSON.parse(isBook);
    console.log(bookList);
    return bookList;
};


function isLastPage(pageNumber, numberOfBooksOnPage) { 
    const bookList = isBooksInLS();
    return pageNumber === Math.ceil(bookList.length / numberOfBooksOnPage);
};


function isMobile() { 
    return window.innerWidth <= 767;
};


function deleteBookFromList(id) {
    const bookList = isBooksInLS();
    const newBookList = bookList.filter(book => book._id != id);
    console.log(newBookList);
    const bookToDelete = document.querySelector(`[data-id="${id}"]`);
    bookToDelete.remove();
    localStorage.removeItem("Shopping");
    localStorage.setItem("Shopping", JSON.stringify(newBookList));
};


// =================RENDER=======================//

function bookTemplate({ _id, author, title, book_image, description, buy_links, list_name }) { 
    const bookAmazon = buy_links.find(buy_link => buy_link.name === "Amazon");
    const amazonBuyLink = bookAmazon.url;
    const id = _id;
    const bookApple = buy_links.find(buy_link => buy_link.name === "Apple Books");
    const appleBuyLink = bookApple.url;
    return `
<li class="booklist-item" data-id="${_id}">
    <div class="booklist-item-image">
        <img class="booklist-image" src="${book_image}"
            alt="book cover" />
    </div>
    <div class="booklist-info-block">
        <div class="booklist-item-info">
            <div class="item-high-box">
                <div class="title-box">
                    <h1>${title}</h1>
                    <p class="booklist-list">${list_name}</p>
                </div>
                <button type="button" class="booklist-delete-btn" data-id="${_id}">
                    <img src="/src/img/shoppinglist/trash-icon.png" alt="trash-icon" width="30" height="30">
                </button> 
            </div>
            <div class="description-box">
                <p class="booklist-description">${description}</p>
            </div>
        </div>
        <div class="booklist-item-links">
            <p class="booklist-author">${author}</p>
            <ul class="booklist-link-box">
                <li class="booklist-amazon">
                    <a class="booklist-amazon-link" href="${amazonBuyLink}"
                        target="_blank"><img src="../img/shops/light-amazon.png" alt=""></a>
                </li>
                <li class="booklist-apple">
                    <a class="booklist-apple-link" href="${appleBuyLink}"
                        target="_blank"><img src="../img/shops/light-apple.png" alt=""></a>
                </li>
            </ul>

        </div>
    </div>
</li>`;
};



function renderBookList(bookList) { 
    const markup = bookList.map(bookTemplate).join('').trim();
    console.log(markup);
    const bookListSection = document.querySelector('.booklist');
    console.log(bookListSection);
    bookListSection.insertAdjacentHTML('beforeend', markup);
}; 

// ==================================================
