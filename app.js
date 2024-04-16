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
import previousView from "./js/previousView.js";

const carroContent = document.querySelector(".carro");
const home = document.querySelector(".home");
const btnFavorites = document.querySelector(".corazon");
const menuShow = document.querySelector(".menu__header");

const { removeCar, removeLikes, removeFilters } = removeEvents();

document.addEventListener("DOMContentLoaded", async () => {
  log();
  botonMenu(menuShow);

  const { user } = dataLocalStorage();
  const arr = await fetchData();
  const responseData = arr.sort(() => Math.random() - 0.5);

  mostrarCards(responseData);

  addFavorites();
  addCar();
  itemsFilter();

  eventFavorites(responseData, user);
  eventCar(responseData, user);
  eventHome(responseData);

  previousView();
}); // Llave final del Main

// event buttons header
// show homeS
function eventHome(responseData) {
  if (home)
    home.addEventListener("click", () => {
      removeCar();
      removeLikes();
      removeFilters();
      mostrarCards(responseData);
    });
}
/*  show likes  */
function eventFavorites(arr, user) {
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
    });
}
// show car
function eventCar(arr, user) {
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
    });
}
