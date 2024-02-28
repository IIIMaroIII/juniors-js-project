import {buildModal} from "./building-modal.js";

const closeModalBtn = document.querySelector("[data-modal-close]");
const modal = document.querySelector("[data-modal]");
const backdrop = document.querySelector(".backdrop");
const listArea = document.querySelector(".home-list");
const body = document.querySelector("body");
const header = document.querySelector(".header");

listArea.addEventListener("click", onModal);
closeModalBtn.addEventListener("click", deleteEventClick);
backdrop.addEventListener("click", deleteEventClick);

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
  if (nameNode === "IMG" || nameNode === "H3" || nameNode === "P" || nameNode === "A") {
    header.classList.toggle("is-hidden-head");
    body.classList.toggle("modal-on");
    buildModal("643282b1e85766588626a07e");
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
const textCongrats = document.createElement("p");
textCongrats.classList.add("shopping-list-message");
textCongrats.textContent = `Congratulations! You have added the book to the shopping list. To
          delete, press the button “Remove from the shopping list”.`;

function changeButton() {
  if (addToShopList.textContent === "ADD TO SHOPPING LIST") {
    addToShopList.textContent = `REMOVE FROM SHOPPING LIST`;
    addToShopList.after(textCongrats);
  } else {
    addToShopList.textContent = `ADD TO SHOPPING LIST`;
    textCongrats.remove();
  }
 };

addToShopList.addEventListener("click", changeButton);
