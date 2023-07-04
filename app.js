/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import log from './log.js';
import botonMenu from './botonMenu.js';
import mostrarCards, { dataLocalStorage, fetchData } from './mostrarCards.js';
import addFavorites from './addFavorites.js';
import addCar from './addCar.js';
import eventClassNames from './eventClassNames.js';
import removeEvents from './removeEvents.js';
import itemsFilter from './itemsFilter.js';
import previousView from './previousView.js';

const carroContent = document.querySelector('.carro');
const home = document.querySelector('.home');
const btnFavorites = document.querySelector('.corazon');
const menuShow = document.querySelector('.menu__header');

// const [ carroContent, home, btnFavorites, menuShow ] = document.querySelectorAll('.carro, .home, .corazon, .menu__header');

const { removeCar, removeLikes, removeFilters } = removeEvents();

document.addEventListener('DOMContentLoaded', async () => {
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
  home.addEventListener('click', () => {
    removeCar();
    removeLikes();
    removeFilters();
    mostrarCards(responseData);
  });
}
/*  show likes  */
function eventFavorites(arr, user) {
  btnFavorites.addEventListener('click', () => {
    // return if there is no user
    if (!user) {
      return Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'you must be loged to watch your favorite items',
        showConfirmButton: false,
        timer: 1500,
      });
    }

    const { likeData } = dataLocalStorage();
    removeCar();
    removeFilters();
    eventClassNames(btnFavorites, 'replace', [ 'far', 'fas' ]);
    eventClassNames(btnFavorites, 'add', 'like');
    mostrarCards(arr, user, likeData);
  });
}
// show car
function eventCar(arr, user) {
  carroContent.addEventListener('click', () => {
    // return if there is no user
    if (!user) {
      return Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'you must be loged to watch your favorite items',
        showConfirmButton: false,
        timer: 1500,
      });
    }

    const { carData } = dataLocalStorage();

    removeLikes();
    removeFilters();
    // in the car
    eventClassNames(carroContent, 'replace', [
      'fa-cart-plus',
      'fa-shopping-cart',
    ]);
    eventClassNames(carroContent, 'add', 'like');
    mostrarCards(arr, user, false, carData);
  });
}
