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
const likesContainer = document.querySelector(".likes");
const menuShow = document.querySelector(".menu__header");

const { removeCar, removeLikes, removeFilters } = removeEvents();

document.addEventListener("DOMContentLoaded", async () => {
  log();
  botonMenu(menuShow);

  // change header styles with observer
  const header = document.querySelector("header");
  headerObserver(header);

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

  const cardsContainer = document.getElementById("redirection");
  // header buttons events
  itemsFilter(cardsContainer);

  eventHome(responseData, cardsContainer);
  eventFavorites(responseData, user, cardsContainer);
  eventCar(responseData, user, cardsContainer);

  document.addEventListener("load", () => {
    if (window.scrollY > 50) header.classList.add("headerSticky");
  });
}); // Llave final del Main

// event buttons header
// show home
function eventHome(responseData, cardsContainer) {
  if (home)
    home.addEventListener("click", () => {
      removeCar();
      removeLikes();
      removeFilters();
      mostrarCards(responseData);
      cardsContainer.scrollIntoView({
        behavior: "smooth",
      });
    });
}
/*  show likes  */
function eventFavorites(arr, user, cardsContainer) {
  if (likesContainer)
    likesContainer.addEventListener("click", () => {
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
      cardsContainer.scrollIntoView({
        behavior: "smooth",
      });
    });
}
// show car
function eventCar(arr, user, cardsContainer) {
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
      cardsContainer.scrollIntoView({
        behavior: "smooth",
      });
    });
}

function headerObserver(header) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRect.top <= 50 || window.scrollY > 50) {
          header.classList.add("headerSticky");
        } else header.classList.remove("headerSticky");
      });
    },
    { threshold: [1], rootMargin: "0px" }
  );
  observer.observe(document.querySelector("main"));
}
