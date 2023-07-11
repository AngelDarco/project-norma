/* eslint-disable no-undef */
import addEventsWithMutationObserver from './addEventsWithMutationObserver.js';

export default function addCar() {
  const container = document.querySelector('.img__main');
  addEventsWithMutationObserver(buy, '.car', container);
  // adding a node to trigger the event observer
  const node = document.createElement('div');
  container.appendChild(node);
}

// function add(z){
function buy(z) {
  const user = window.localStorage.getItem('session');
  const carUser = `${user}Car`;
  const id = z.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[1]
    .childNodes[5].innerHTML;

  if (user) {
    //  add car
    if (!z.target.classList.contains('addCar')) {
      agregarCar(id, carUser);
      z.target.classList.replace('fa-cart-plus', 'fa-shopping-cart');
      z.target.classList.add('addCar');
      z.target.classList.add('like');
    } else {
      eliminarCar(id, carUser);
      z.target.classList.replace('fa-shopping-cart', 'fa-cart-plus');
      z.target.classList.remove('addCar');
      z.target.classList.remove('like');
    }
  } else {
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'You must be loged first',
      showConfirmButton: false,
      timer: 500,
    });
  }
}

/* Mostrar Favoritos */
function agregarCar(id, user) {
  const data = JSON.parse(window.localStorage.getItem(user));
  const carData = { data: [] };

  if (!data) {
    carData.data.push(id);
    window.localStorage.setItem(user, JSON.stringify(carData));
  } else {
    carData.data.push(...data.data, id);
    window.localStorage.setItem(user, JSON.stringify(carData));
  }

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Guardado',
    showConfirmButton: false,
    timer: 500,
  });
}

/* Eliminar Favoritos */
function eliminarCar(id, user) {
  const data = JSON.parse(window.localStorage.getItem(user));
  const datadislikes = { data: [] };
  const res = data.data.filter((itm) => itm != id);
  datadislikes.data = res;
  window.localStorage.setItem(user, JSON.stringify(datadislikes));

  Swal.fire({
    position: 'center',
    icon: 'warning',
    title: 'Borrado',
    showConfirmButton: false,
    timer: 500,
  });
}
