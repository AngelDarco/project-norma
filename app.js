/* eslint-disable no-undef */
import log from "./js/log.js";
import botonMenu from "./js/botonMenu.js";
import mostrarCards, {
  dataLocalStorage,
  fetchData,
} from "./js/mostrarCards.js";
import addFavorites from "./js/addFavorites.js";
import addCar from "./js/addCar.js";
import eventClassNames from "./js/eventClassNames.js";
import removeEvents from "./js/removeEvents.js";
import itemsFilter from "./js/itemsFilter.js";

import slider from "./js/slider.js";

const carroContent = document.querySelector(".carro");
const home = document.querySelector(".home");
const btnFavorites = document.querySelector(".corazon");
const menuShow = document.querySelector(".menu__header");

const { removeCar, removeLikes, removeFilters } = removeEvents();

document.addEventListener("DOMContentLoaded", async () => {
  log();
  botonMenu(menuShow);

  // Slider
  const container = document.querySelector(".slider");
  const body = document.querySelector(".main");
  slider(
    container,
    [
      "./assets/img/slider1.jpg",
      "./assets/img/slider2.jpg",
      "./assets/img/slider3.jpg",
      "./assets/img/slider4.jpg",
      "./assets/img/slider.jpg",
    ],
    body
  );

  const { user } = dataLocalStorage();
  const arr = await fetchData();
  const responseData = arr.sort(() => Math.random() - 0.5);

  mostrarCards(responseData);

  addFavorites();
  addCar();
  itemsFilter();

  const containerCards = document.getElementById("redirection");
  eventFavorites(responseData, user, containerCards);
  eventCar(responseData, user, containerCards);
  eventHome(responseData, containerCards);
}); // Llave final del Main

// event buttons header
// show home
function eventHome(responseData, containerCards) {
  if (home)
    home.addEventListener("click", () => {
      removeCar();
      removeLikes();
      removeFilters();
      mostrarCards(responseData);
      containerCards.scrollIntoView({
        behavior: "smooth",
      });
    });
}
/*  show likes  */
function eventFavorites(arr, user, containerCards) {
  if (btnFavorites)
    btnFavorites.addEventListener("click", () => {
      // return if there is no user
      if (!user) {
        return Swal.fire({
          position: "center",
          icon: "warning",
          title: "you must be loged to watch your favorite items",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      const likeData = true;
      removeCar();
      removeFilters();
      eventClassNames(btnFavorites, "replace", ["far", "fas"]);
      eventClassNames(btnFavorites, "add", "like");
      mostrarCards(arr, user, likeData);
      containerCards.scrollIntoView({
        behavior: "smooth",
      });
    });
}
// show car
function eventCar(arr, user, containerCards) {
  if (carroContent)
    carroContent.addEventListener("click", () => {
      // return if there is no user
      if (!user) {
        return Swal.fire({
          position: "center",
          icon: "warning",
          title: "you must be loged to watch your favorite items",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      const carData = true;
      const likeData = false;

      removeLikes();
      removeFilters();
      // in the car
      eventClassNames(carroContent, "replace", [
        "fa-cart-plus",
        "fa-shopping-cart",
      ]);
      eventClassNames(carroContent, "add", "like");
      mostrarCards(arr, user, likeData, carData);
      containerCards.scrollIntoView({
        behavior: "smooth",
      });
    });
}
