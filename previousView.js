import addEventsWithMutationObserver from "./addEventsWithMutationObserver.js";
import eventClassNames from "./eventClassNames.js";

const marco = document.querySelector(".marco");
const cabezera = document.querySelector(".cabezera__header");
const fondo = document.querySelector(".fondo");

export default function previousView() {
  /* adding events to cards */
  addEventsWithMutationObserver(vistaPreviaImagenes, ".btn-ver");
}

/* Lanzador de Vista previa de imagenes */
function vistaPreviaImagenes(item) {
  if (!item) return;
  eventClassNames(cabezera, "add", "ocultar");
  eventClassNames(fondo, "toggle", "ocultar");
  eventClassNames(fondo, "toggle", "fondo__activo");
  eventClassNames(marco, "toggle", "ocultar");
  eventClassNames(marco, "toggle", "mostrador__activo");

  const target = item.target.offsetParent.children[0].childNodes[3];

  const nodo = document.createElement("img");
  nodo.setAttribute("src", target.getAttribute("src"));
  nodo.setAttribute("class", "vistaPrevia");
  marco.appendChild(nodo);
  fondo.addEventListener("click", fondoPreviousView);
}

function fondoPreviousView() {
  cabezera.classList.remove("ocultar");
  fondo.classList.add("ocultar");
  fondo.classList.remove("fondo__activo");
  marco.classList.add("ocultar");
  marco.classList.remove("mostrador__activo");
}