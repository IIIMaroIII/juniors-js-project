import { BooksAPI } from "./booksAPI.js";

const localStorageKey = "Shopping";

const Book = new BooksAPI;

let arrBooks = JSON.parse(localStorage.getItem(localStorageKey)) ?? [];

export async function saveLocal(id) {
    Book.fetchBookByID(id)
        .then(value => {
            if(!isLocal(id)){
                arrBooks.push(value);
                localStorage.setItem(localStorageKey, JSON.stringify(arrBooks));
            }
        })
        .catch(error => console.log(error));
}

export async function removeLocal(id) {
    Book.fetchBookByID(id)
        .then(value => {
            for (let i = 0; i < arrBooks.length; i++){
                if (arrBooks[i]._id === value._id) {
                    arrBooks.splice(i, 1);
                    localStorage.setItem(localStorageKey, JSON.stringify(arrBooks));
                    break;
                }
            }
        })
        .catch(error => console.log(error));
}

export function isLocal(ID) {
    let flag = false;
    arrBooks.map(el => {
        if (el._id === ID) {
            flag = true;
        }
    });
    return flag;
}

export async function getLocal(id) {
    return arrBooks;
}
