/* eslint-disable no-unreachable */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import eventClassNames from './eventClassNames.js';

const container = document.querySelector('.img__main');

/**
 * Retrieves user data from local storage.
 *
 * @return {Object} An object containing user data.
 */
function dataLocalStorage() {
  const user = window.localStorage.getItem('session');
  const likeData = JSON.parse(window.localStorage.getItem(`${user}Likes`));
  const carData = JSON.parse(window.localStorage.getItem(`${user}Car`));
  return { user, likeData, carData };
}

/**
 * Shows cards based on the given array and user information.
 *
 * @param {Array} arr - The array containing the cards to be shown.
 * @param {string} user - The user information.
 * @param {boolean} [likeData=false] - Flag indicating whether to include like data.
 * @param {boolean} [carData=false] - Flag indicating whether to include car data.
 */
async function mostrarCards(arr, user, likeData, carData) {
  if (!arr || arr.length <= 0) return;

  if (user) {
    if (likeData) {
      const { likeData: like } = dataLocalStorage();
      if (like?.data?.length > 0) {
        const likeDataFiltered = filter(like, arr);
        loadObserver(likeDataFiltered);
        window.scrollTo({ bottom: 0, behavior: 'smooth' });
        return;
      }
      bucleBorrar();
      return Swal.fire({
        title: 'No favorite items found',
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
      });
    } if (carData) {
      const { carData: car } = dataLocalStorage();
      if (car?.data?.length > 0) {
        const carDataFiltered = filter(car, arr);
        loadObserver(carDataFiltered);
        window.scrollTo({ bottom: 0, behavior: 'smooth' });
        return;
      }
      bucleBorrar();
      return Swal.fire({
        title: 'No items found',
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
      });
    } loadObserver(arr);
  } loadObserver(arr);
}

/**
 * Filters an array based on a condition and returns the filtered array.
 *
 * @param {object} database - The database object.
 * @param {array} arr - The array to filter.
 * @return {array} - The filtered array.
 */
function filter(database, arr) {
  const datos = [];
  for (let i = 0; i < database.data.length; i++) {
    for (let ii = 0; ii < arr.length; ii++) {
      if (database.data[i] === arr[ii].codepro.toString()) datos.push(arr[ii]);
    }
  }
  return datos;
}

/**
 * Deletes all child nodes of the container element.
 *
 * @param {Element} container - The container element.
 * @return {void} This function does not return anything.
 */
function bucleBorrar() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

/**
 * Loads the observer with the given array of loaded items, like data, and car data.
 *
 * @param {Array} arrLoaded - The array of loaded items.
 * @param {type} likeData - The like data.
 * @param {type} carData - The car data.
 * @return {type} The return value.
 */
const loadObserver = (arr) => {
  const arrLoaded = [ ...arr ];
  bucleBorrar();
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  };

  const { likeData, carData } = dataLocalStorage();

  let count = 6;
  if (arrLoaded.length < count) count = arrLoaded.length;
  (() => {
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push(arrLoaded[0]);
      arrLoaded.shift();
    }
    card(data, likeData, carData);
  })();

  if (container.hasChildNodes && arrLoaded.length !== 0) {
    const observer = new IntersectionObserver((entries) => {
      const data = [];
      entries.forEach((entry) => {
        if (arrLoaded.length === 0) return;
        if (entry.isIntersecting) {
          for (let i = 0; i < count; i++) {
            data.push(arrLoaded[0]);
            arrLoaded.shift();
          }
          card(data, likeData, carData);
          observer.unobserve(entry.target);
          observer.observe(container.lastElementChild);
        }
      });
    }, options);
    observer.observe(container.lastElementChild);
  }
};

/**
 * Generates a card for each item in the provided array and appends it to the container element.
 *
 * @param {Array} arr - The array of items to generate cards for.
 * @param {Object} likeData - The data related to likes.
 * @param {Object} carData - The data related to cars.
 */
const card = (arr, likeData, carData) => {
  if (arr.length === 0) return;
  const template = document.querySelector('.template-card').content;
  const corazon = template.querySelector('.card-back figure .heart');
  const carro = template.querySelector('.card-back figure .car');
  const fragment = new DocumentFragment();
  let i = 0;

  arr.forEach((item) => {
    if (!item) return;

    template
      .querySelector('.img')
      .setAttribute('src', item.imagen);
    template.querySelector('figcaption').innerHTML = item.codepro;
    template.querySelector('.nombre').innerHTML = item.nombre;
    template.querySelector('.talla').innerHTML = item.talla;
    template.querySelector('.precio').innerHTML = item.precio;
    template.querySelector('.stock').innerHTML = item.stock;
    template.querySelector('.genero').innerHTML = item.genero;
    template.querySelector('.span-descripcion').innerHTML = item.descripcion;
    template
      .querySelector('.card-back figure .img2')
      .setAttribute('src', item.imagen);
    template.querySelector('.card-back figure .img2').setAttribute('id', i);

    /* Mostrar like */
    if (likeData && likeData?.data.includes(item.codepro.toString())) {
      eventClassNames(corazon, 'remove', 'far');
      eventClassNames(corazon, 'remove', 'fa-heart');

      eventClassNames(corazon, 'add', 'fas');
      eventClassNames(corazon, 'add', 'fa-heart');
      eventClassNames(corazon, 'add', 'like');
    } else {
      eventClassNames(corazon, 'remove', 'fas');
      eventClassNames(corazon, 'remove', 'fa-heart');
      eventClassNames(corazon, 'remove', 'like');

      eventClassNames(corazon, 'add', 'far');
      eventClassNames(corazon, 'add', 'fa-heart');
    }

    /* Mostrar Car */
    if (carData && carData?.data.includes(item.codepro.toString())) {
      eventClassNames(carro, 'remove', 'fas');
      eventClassNames(carro, 'remove', 'fa-cart-plus');

      eventClassNames(carro, 'add', 'fas');
      eventClassNames(carro, 'add', 'fa-shopping-cart');
      eventClassNames(carro, 'add', 'like');
    } else {
      eventClassNames(carro, 'remove', 'fas');
      eventClassNames(carro, 'remove', 'fa-shopping-cart');
      eventClassNames(carro, 'remove', 'like');

      eventClassNames(carro, 'add', 'fas');
      eventClassNames(carro, 'add', 'fa-cart-plus');
    }

    // adding item colors
    template.querySelector('.card-front ul .li-color').innerHTML = addColors(item);

    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
    i += 1;
  });
  container.appendChild(fragment);
};

async function fetchData() {
  return fetch('./productosRead.php')
    .then((data) => data.json())
    .then((data) => data)
    .catch((error) => error);
}

const addColors = (dato) => {
  let div = "<span class='for-span colores'>Colores: </span>";
  const colors = dato?.colores.split(',');
  for (let i = 0; i < colors.length; i++) {
    div += `<span class="color label ${colors[i]}"></span>`;
  }
  return div;
};

export default mostrarCards;
export { loadObserver, fetchData, dataLocalStorage };
