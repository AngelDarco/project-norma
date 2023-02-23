'use strict';
import { stylos } from './css.js';
// import {carro,carroBbdd} from './carro.js';
import log from './log.js';
import botonMenu from './botonMenu.js';
import mostrarCards from './mostrarCards.js';
import addFavorites from './addFavorites.js';
import addCar from './addCar.js';
import eventClassNames from "./eventClassNames.js";
import removeEvents from './removeEvents.js';
import itemsFilter from './itemsFilter.js';


const cajacard = document.querySelector('.img__main');

const mostrador = document.querySelector(".marco");
const fondo = document.querySelector(".fondo");
const cabezera = document.querySelector(".cabezera__header");
const izquierda = document.querySelector(".fa-backward");
const derecha = document.querySelector(".fa-forward");
const carroContent = document.querySelector('.carro i');

const home = document.querySelector('.home');
const btnFavorites = document.querySelector('.corazon');
const menu = document.getElementById("menu");
const menuShow = document.querySelector(".menu__header");
const menuFondo = document.querySelector('.fondo__header');
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
  eventHome()



}); // Llave final del Main


// event buttons header
// show home
function eventHome() {
  home.addEventListener('click', () => {
    removeCar();
    removeLikes();
    removeFilters();
    mostrarCards();
  });
};
/*  show likes  */
function eventFavorites() {
  btnFavorites.addEventListener('click', () => {
    removeCar();
    removeFilters();
    eventClassNames(btnFavorites, 'replace', ['far', 'fas']);
    eventClassNames(btnFavorites, 'add', 'like');
    mostrarCards(true);
  });
};
// show car
function eventCar() {
  carroContent.addEventListener('click', () => {
    removeLikes();
    removeFilters();
    // in the car
    eventClassNames(carroContent, 'replace', ['fa-cart-plus', 'fa-shopping-cart']);
    eventClassNames(carroContent, 'add', 'like')
    mostrarCards(false, true)
  });
};


/* Muestra Las Imagenes */


const color = (dato) => {
  let array = dato.split(',');
  let nodo = '';
  let resultado = document.createElement('span');
  resultado.setAttribute('class', 'for-span colores');

  for (let i = 0; i < array.length; i++) {
    nodo = document.createElement('span');
    nodo.setAttribute('class', `color label ${array[i]}`);
    resultado.appendChild(nodo);
  }
  return resultado;
};

/* Detector Imagenes en el Grid */
function eventoImagenes() {
  if (window.document.querySelector('.img__main').hasChildNodes()) {
    const imagenes = document.querySelectorAll(".btn-ver");
    console.log(imagenes)
    imagenes.forEach(function (e) {
      e.addEventListener("click", function () {
        vistaPreviaImagenes(e);
      });
    });
  } else
    console.log('no nodes')
};


/* Lanzador de Vista previa de imagenes */
function vistaPreviaImagenes(marco) {
  console.log(marco)
  cabezera.classList.add("ocultar");
  fondo.classList.toggle("ocultar");
  fondo.classList.toggle("fondo__activo");
  mostrador.classList.toggle("ocultar")
  mostrador.classList.toggle("mostrador__activo");

  let padreimg = marco.parentNode;
  let nodoimg = padreimg.children[0];
  let imgbtn = nodoimg.children[1];

  let nodo = document.createElement('img');
  let img = imgbtn.getAttribute('src');
  let id = imgbtn.getAttribute('id');
  nodo.setAttribute('src', img);
  nodo.setAttribute('id', id);
  nodo.setAttribute('class', 'vistaPrevia');

  let viejo = mostrador.lastChild;
  let nuevo = mostrador.appendChild(nodo);
  if (mostrador.lastChild.nodeName == 'IMG')
    mostrador.replaceChild(nuevo, viejo);
};

/* Controles */
function mostrarControles() {

  mostrador.addEventListener("click", () => {
    izquierda.classList.toggle("ocultar");
    derecha.classList.toggle("ocultar");
  });

  fondo.addEventListener("click", () => {
    cabezera.classList.remove("ocultar");
    fondo.classList.add("ocultar");
    fondo.classList.remove("fondo__activo");
    mostrador.classList.add("ocultar");
    mostrador.classList.remove("mostrador__activo");
  });

};


/* Cambio Imagenes por los controles */
function cambioImagen() {
  izquierda.addEventListener("click", (e) => {
    let signo = false;
    cambioNodos(e, signo);
    e.stopPropagation();
  });


  derecha.addEventListener("click", (e) => {
    let signo = true;
    cambioNodos(e, signo);
    e.stopPropagation();
  });
};
/* Remplazo de Nodos - Cambio de Imagenes */
function cambioNodos(e, signo) {
  let num;
  let array = document.querySelectorAll('.img2'); //grid
  let padre = e.target.parentNode;
  let hijo = padre.children[2];
  let imgcambio = hijo.getAttribute('src');

  let id = hijo.getAttribute('id');
  let oldNode = mostrador.lastChild;

  if (signo) {
    if (id >= (array.length - 1)) id = 0
    num = parseInt(id) + 1;
  } else {
    if (id == 0) id = array.length
    num = parseInt(id) - 1;
  }
  let nodonuevo = array[num];
  let img2 = nodonuevo.getAttribute('src');
  let id2 = nodonuevo.getAttribute('id');
  let newNode = document.createElement('img');
  newNode.setAttribute('src', img2);
  newNode.setAttribute('id', id2);
  newNode.setAttribute('class', 'vistaPrevia');
  mostrador.replaceChild(newNode, oldNode);
};

