import eventClassNames from "./eventClassNames.js";

export default function removeEvents() {
const carroContent = document.querySelector('.carro i');
const btnFavorites = document.querySelector('.corazon');
const menuShow = document.querySelector(".menu__header");
const menu = document.getElementById("menu");


  function removeCar() {
    if (!carroContent.classList.contains('like')) return;
    eventClassNames(carroContent, 'replace', ['fa-shopping-cart', 'fa-cart-plus']);
    eventClassNames(carroContent, 'remove', 'like')
  }
  function removeLikes() {
    const btnFavorites = document.querySelector('.corazon');
    if (!btnFavorites.classList.contains('like')) return;
    eventClassNames(btnFavorites, 'replace', ['fas', 'far']);
    eventClassNames(btnFavorites, 'remove', 'like');
  }
  function removeFilters() {
    if (menuShow.classList.contains('ocultar')) return
    eventClassNames(menu, 'remove', 'rotar')
    eventClassNames(menuShow, 'add', 'ocultar')
    menu.style.transition = '1s';
  }
  return { removeCar, removeLikes, removeFilters }
}
