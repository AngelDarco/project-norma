'use strict';
import { stylos } from './css.js';
// import {carro,carroBbdd} from './carro.js';
import log from './log.js';
import botonMenu from './botonMenu.js';
import mostrarCards from './mostrarCards.js';
import addFavorites from './addFavorites.js';
import addCar from './addCar.js';

const cajacard = document.querySelector('.img__main');

const mostrador = document.querySelector(".marco");
const fondo = document.querySelector(".fondo");
const cabezera = document.querySelector(".cabezera__header");
const izquierda = document.querySelector(".fa-backward");
const derecha = document.querySelector(".fa-forward");
const filtros = document.querySelectorAll('.filtro');
const carroContent = document.querySelector('.carro i');

const home = document.querySelector('.home');
const btnFavorites = document.querySelector('.corazon');
const menu = document.getElementById("menu");
const menuShow = document.querySelector(".menu__header");
const menuFondo = document.querySelector('.fondo__header');

document.addEventListener("DOMContentLoaded", function () {
  log();
  botonMenu(menuShow);

  mostrarCards();
  addFavorites();
  addCar();

  eventFavorites();
  eventCar();
  eventHome()


}); // Llave final del Main


function eventClassNames(node, event, className) {
  if (event === 'add') node.classList.add(className);
  if (event === 'remove') node.classList.remove(className);
  if (event === 'toggle') node.classList.toggle(className);
  if (event === 'replace') node.classList.replace(className[0], className[1]);
}

function removeEvents() {
  function removeCar() {
    if (!carroContent.classList.contains('like')) return;
    eventClassNames(carroContent, 'replace', ['fa-shopping-cart', 'fa-cart-plus']);
    eventClassNames(carroContent, 'toggle', 'like')
  }
  function removeLikes() {
    const btnFavorites = document.querySelector('.corazon');
    if (!btnFavorites.classList.contains('like')) return;
    eventClassNames(btnFavorites, 'replace', ['fas', 'far']);
    eventClassNames(btnFavorites, 'toggle', 'like');
  }
  function removeFilters() {
    if (menuShow.classList.contains('ocultar')) return
    eventClassNames(menu, 'remove', 'rotar')
    eventClassNames(menuShow, 'add', 'ocultar')
    menu.style.transition = '1s';
  }
  return { removeCar, removeLikes, removeFilters }
}

function eventFavorites() {
  /*  Mostrar Favoritos - Corazon Header  */
  const { removeCar, removeFilters } = removeEvents();

  btnFavorites.addEventListener('click', () => {
    removeCar();
    removeFilters();
    eventClassNames(btnFavorites, 'replace', ['far', 'fas']);
    eventClassNames(btnFavorites, 'toggle', 'like');
    bucleBorrar();
    mostrarCards(true);

    // if (!menuShow.classList.contains('ocultar')) {
    //   menu.classList.remove('rotar');
    // eventClassNames(menu,'remove','rotar');
    // eventClassNames(menuShow,'add','ocultar');
    // menu.style.transition = '5s';
    // };
  });

};


function eventHome() {
  const { removeCar, removeLikes, removeFilters } = removeEvents();
  home.addEventListener('click', () => {
    removeCar();
    removeLikes();
    removeFilters();
    if (btnFavorites.classList.contains('fas'))
      btnFavorites.classList.remove('fas');
    if (carroContent.classList.contains('fa-shopping-cart'))
      carroContent.classList.replace('fa-shopping-cart', 'fa-cart-plus');

    if (!menuShow.classList.contains('ocultar')) {
      menu.classList.remove('rotar');
      menuShow.classList.add('ocultar');
      menu.style.transition = '1s';
      menuShow.classList.add('ocultar');
    };

    bucleBorrar();
    mostrarCards();
  });
};

function eventCar() {
  const { removeLikes, removeFilters } = removeEvents();

  carroContent.addEventListener('click', () => {
    removeLikes();
    removeFilters();
    // in the car
    eventClassNames(carroContent, 'replace', ['fa-cart-plus', 'fa-shopping-cart']);
    eventClassNames(carroContent, 'toggle', 'like')

    bucleBorrar();
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


/* Borra las imagenes Antes de Mostrarlas */
function bucleBorrar() {
  while (cajacard.firstChild) {
    cajacard.removeChild(cajacard.firstChild);
  }
  // eventoImagenes()
};

/* Filtrado de Imagenes */
function filtroImagenes(data) {

  filtros.forEach(e => {
    e.addEventListener('click', (e) => {
      if (btnFavorites.classList.contains('fas'))
        btnFavorites.classList.remove('fas');

      if (e.target.classList.contains('damas')) {
        let womans = data.filter(item => item.genero == 'Mujer');
        bucleBorrar();
        bucleMostrar(womans);

      } else if (e.target.classList.contains('caballeros')) {
        let mens = data.filter(item => item.genero == 'Hombre');
        bucleBorrar();
        bucleMostrar(mens);

      } else if (e.target.classList.contains('ninos')) {
        let kids = data.filter(item => item.genero == 'Niño');
        bucleBorrar();
        bucleMostrar(kids);

      } else if (e.target.classList.contains('casa')) {
        bucleBorrar();
        bucleMostrar(data);

      }
    });
  });
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

