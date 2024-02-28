import { buildModal } from "./building-modal.js";

import { saveLocal, removeLocal } from "./localSave.js"

const closeModalBtn = document.querySelector("[data-modal-close]");
const modal = document.querySelector("[data-modal]");
const backdrop = document.querySelector(".backdrop");
const listArea = document.querySelector(".home-list");
const body = document.querySelector("body");
const header = document.querySelector(".header");

listArea.addEventListener("click", onModal);
closeModalBtn.addEventListener("click", deleteEventClick);
backdrop.addEventListener("click", deleteEventClick);

let bookId;

function deleteEventClick(e) {
  if (e.currentTarget === e.target || e.target.classList.contains("close")){
    e.stopPropagation();
    closeModal();
  }
}

function deleteEventEsc(e) {
  e.stopPropagation();
  if (e.key === "Escape") {
    closeModal();
  }
}

function onModal(e) {
  e.preventDefault();
  e.stopPropagation();
  
  const nameNode = e.target.nodeName;
  if(listArea.firstChild.classList.contains("home-list-item")){
    if (nameNode === "IMG" || nameNode === "H3" || nameNode === "P" || nameNode === "A") {
      switch (e.target.nodeName) {
        case "IMG":
          bookId = e.target.parentNode.id;
          break;
        case "H3":
          bookId = e.target.parentNode.id;
          break;
        case "P":
          bookId = e.target.parentNode.id;
          break;
        case "A":
          bookId = e.target.id;
          break;
        default:
      }
      buildModal(bookId);
      body.classList.toggle("modal-on");
      header.classList.toggle("is-hidden-head");
      modal.classList.toggle("is-hidden");
      window.addEventListener('keydown', deleteEventEsc);
    }
  } else {
    bookId = e.target.parentNode.parentNode.dataset.id;
    console.log(bookId);
    buildModal(bookId);
    body.classList.toggle("modal-on");
    header.classList.toggle("is-hidden-head");
    modal.classList.toggle("is-hidden");
    window.addEventListener('keydown', deleteEventEsc);
  }
}

function closeModal() {
  modal.classList.toggle("is-hidden");
  header.classList.toggle("is-hidden-head");
  body.classList.toggle("modal-on");
  window.removeEventListener('keydown', deleteEventEsc);
};

const addToShopList = document.querySelector(".save-to-list");
const textCongrats = document.querySelector(".shopping-list-message");

function changeButton() {
  if (addToShopList.textContent === "ADD TO SHOPPING LIST") {
    saveLocal(bookId);
    addToShopList.textContent = `REMOVE FROM SHOPPING LIST`;
    if (textCongrats.classList.contains("is-hidden")){
      textCongrats.classList.toggle("is-hidden");
    }
  } else {
    removeLocal(bookId);
    addToShopList.textContent = `ADD TO SHOPPING LIST`;
    if (!textCongrats.classList.contains("is-hidden")){
      textCongrats.classList.toggle("is-hidden");
    }
  }
 };

addToShopList.addEventListener("click", changeButton);
