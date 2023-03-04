import log from "./log.js";
import botonMenu from "./botonMenu.js";
import mostrarCards from "./mostrarCards.js";
import addFavorites from "./addFavorites.js";
import addCar from "./addCar.js";
import eventClassNames from "./eventClassNames.js";
import removeEvents from "./removeEvents.js";
import itemsFilter from "./itemsFilter.js";
import previousView from "./previousView.js";

const carroContent = document.querySelector(".carro i");
const home = document.querySelector(".home");
const btnFavorites = document.querySelector(".corazon");
const menuShow = document.querySelector(".menu__header");
const { removeCar, removeLikes, removeFilters } = removeEvents();

document.addEventListener("DOMContentLoaded", function () {
  log();
  botonMenu(menuShow);
  mostrarCards();
  addFavorites();
  addCar();
  itemsFilter();
  eventFavorites();
  eventCar();
  eventHome();
  previousView();

}); // Llave final del Main


// event buttons header
// show home
function eventHome() {
  home.addEventListener("click", () => {
    removeCar();
    removeLikes();
    removeFilters();
    mostrarCards();
  });
}
/*  show likes  */
function eventFavorites() {
  btnFavorites.addEventListener("click", () => {
    removeCar();
    removeFilters();
    eventClassNames(btnFavorites, "replace", ["far", "fas"]);
    eventClassNames(btnFavorites, "add", "like");
    mostrarCards(true);
  });
}
// show car
function eventCar() {
  carroContent.addEventListener("click", () => {
    removeLikes();
    removeFilters();
    // in the car
    eventClassNames(carroContent, "replace", ["fa-cart-plus", "fa-shopping-cart"]);
    eventClassNames(carroContent, "add", "like");
    mostrarCards(false, true);
  });
}