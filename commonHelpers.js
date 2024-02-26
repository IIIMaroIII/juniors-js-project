import{A as c,i as m}from"./assets/vendor-b1ee5dfe.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const g=document.querySelector(".burger-menu"),a=document.querySelector(".mobile-menu"),l=g.querySelector("use"),h=document.body;g.addEventListener("click",()=>{a.classList.toggle("active"),a.classList.contains("active")?(h.style.overflow="hidden",l.setAttribute("xlink:href","src/img/sprite.svg#icon-x-close")):(h.style.overflow="auto",l.setAttribute("xlink:href","src/img/sprite.svg#icon-burger-menu-icon"))});const k=document.querySelector(".toggle-theme");k.addEventListener("click",function(){document.body.classList.toggle("dark-mode")});const f="/juniors-js-project/assets/error-bd282b8e.svg",y="/juniors-js-project/assets/caution-fce7ed33.svg",C="/juniors-js-project/assets/hello-28eb2f9b.svg",p="/juniors-js-project/assets/ok-2293f1ac.svg";class d{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.CATEGORY_LIST="/category-list",this.TOP_BOOKS="/top-books",this.URL_CATEGORY="/category?",this.iconError=f,this.iconCaution=y,this.iconHello=C,this.iconOk=p,this.errorNotification={title:"Error",message:"",backgroundColor:"#ff4e4e",icon:this.iconError}}async fetchCategoryList(){const e=this.BASE_URL+this.CATEGORY_LIST;try{return(await c.get(e)).data}catch(t){this.errorNotification.message=t,this.showNotification(this.errorNotification)}}async fetchTopBooks(){const e=this.BASE_URL+this.TOP_BOOKS;try{return(await c.get(e)).data}catch(t){this.errorNotification.message=t,this.showNotification(this.errorNotification)}}async fetchBookByID(e){const t=`${this.BASE_URL}/${e}`;try{return(await c.get(t)).data}catch(i){this.errorNotification.message=i,this.showNotification(this.errorNotification)}}async fetchBooksBySelectedCategory(e){const t=new URLSearchParams;t.append("category",e);const i=`${this.BASE_URL}${this.URL_CATEGORY}${t.toString()}`;try{return(await c.get(i)).data}catch(o){this.errorNotification.message=o,this.showNotification(this.errorNotification)}}showNotification({title:e="Hello",message:t="Type in your message, please",backgroundColor:i="white",icon:o=this.iconCaution}){return m.show({titleSize:"16px",title:`${e}`,message:`${t}`,messageSize:"16px",closeOnEscape:!0,position:"topRight",backgroundColor:`${i}`,iconUrl:`${o}`})}}class b{constructor(){this.booksAPI=new d,this.allCategoriesName="ALL CATEGORIES",this.bookClickCallback=null}addEventListenerBookClick(e){typeof e=="function"&&(this.bookClickCallback=e)}getBooksOfClickCategory(e){if(e===this.allCategoriesName){this.booksAPI.fetchTopBooks().then(t=>console.log(t)).catch(t=>console.log(t));return}this.booksAPI.fetchBooksBySelectedCategory(e).then(t=>{console.log(t),this.renderListBooks(t),this.addBookListeners()}).catch(t=>console.log(t))}renderListBooks(e){const t=this.itemsTemplate(e);document.getElementById("books-list").innerHTML=t}itemsTemplate(e){return e.map(this.itemTemplate).join("")}itemTemplate(e){const{book_image:t,author:i,_id:o,list_name:s}=e;return`
          <li class="book-item book-item-styles" data-id="${o}">
              <div class="wrap-item-img">
                  <img class="book-img" src="${t}" alt="" title=""/>
              </div>
              <div class="wrap-info">
                  <p class="info-item-name">
                      ${s}
                  </p>
                   <p class="info-item-author">
                      ${i}
                  </p>
              </div>
          </li>
      `}addBookListeners(){document.querySelectorAll(".book-item").forEach(t=>{t.addEventListener("click",i=>{this.handleBookClick(i)})})}handleBookClick(e){const t=e.currentTarget.dataset.id;this.bookClickCallback&&this.bookClickCallback(t)}}class L{constructor(){this.booksAPI=new d,this.allCategoriesName="ALL CATEGORIES";const e=document.querySelector(".home-all-categories");e.dataset.categoryName=this.allCategoriesName,e.addEventListener("click",this.handleCategoryClick),this.getCategories(),this.categoryClickCallback=null}addEventListenerCategoryClick(e){typeof e=="function"&&(this.categoryClickCallback=e)}getCategories(){this.booksAPI.fetchCategoryList().then(e=>{this.renderListCategory(e),this.addCategoriesListeners()}).catch(e=>console.log(e))}renderListCategory(e){const t=this.itemsTemplate(e);document.getElementById("categories-list").innerHTML=t}itemsTemplate(e){return e.map(this.itemTemplate).join("")}itemTemplate(e){const{list_name:t}=e;return`
              <li class="home-category-item item-style">
                  <div class="link-item" data-category-name="${t}">${t}</div>
              </li>
          `}addCategoriesListeners(){document.querySelectorAll(".link-item").forEach(t=>{t.addEventListener("click",i=>{this.handleCategoryClick(i)})})}handleCategoryClick(e){const t=e.currentTarget.dataset.categoryName;console.log(t),this.categoryClickCallback&&this.categoryClickCallback(t)}}const E=new L,u=new b;E.addEventListenerCategoryClick(B);function B(r){u.getBooksOfClickCategory(r)}u.addEventListenerBookClick(S);function S(r){console.log(r)}
//# sourceMappingURL=commonHelpers.js.map
