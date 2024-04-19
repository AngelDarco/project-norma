/* eslint-disable no-undef */
import addEventsWithMutationObserver from "./addEventsWithMutationObserver.js";

// function add(item){
function buy(item) {
  const user = window.localStorage.getItem("session");
  const carUser = `${user}Car`;

  const card = this.closest(".flip-card");
  const cardId = card.querySelector("figcaption").innerHTML;

  //  add car
  if (user) {
    if (item && !item.target.classList.contains("fa-shopping-cart")) {
      item.target.classList.replace("fa-cart-plus", "fa-shopping-cart");
      item.target.classList.add("addCar");
      item.target.classList.add("like");
      agregarCar(cardId, carUser);
    } else {
      item.target.classList.replace("fa-shopping-cart", "fa-cart-plus");
      item.target.classList.remove("addCar");
      item.target.classList.remove("like");
      eliminarCar(cardId, carUser);
    }
  } else {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "You must be loged first",
      showConfirmButton: false,
      timer: 500,
    });
  }
}

/* Mostrar Favoritos */
function agregarCar(cardId, user) {
  const storage = JSON.parse(window.localStorage.getItem(user));

  if (storage && storage.data.includes(cardId)) return;

  if (!storage) {
    const carData = { data: [] };
    carData.data.push(cardId);
    window.localStorage.setItem(user, JSON.stringify(carData));
  } else {
    storage.data.push(cardId);
    window.localStorage.setItem(user, JSON.stringify(storage));
  }

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Guardado",
    showConfirmButton: false,
    timer: 500,
  });
}

/* Eliminar Favoritos */
function eliminarCar(cardId, user) {
  const data = JSON.parse(window.localStorage.getItem(user));
  const datadislikes = { data: [] };
  datadislikes.data = data.data.filter((itm) => itm != cardId);
  window.localStorage.setItem(user, JSON.stringify(datadislikes));

  Swal.fire({
    position: "center",
    icon: "warning",
    title: "Borrado",
    showConfirmButton: false,
    timer: 500,
  });
}

export default function addCar() {
  const container = document.querySelector(".cards-container");
  addEventsWithMutationObserver(buy, ".car", container);
  // adding a node to trigger the event observer
  const node = document.createElement("div");
  container.appendChild(node);
}
