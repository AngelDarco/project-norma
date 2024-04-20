// import addEventsWithMutationObserver from "./addEventsWithMutationObserver.js";
import eventClassNames from "./eventClassNames.js";

const previewImg = document.querySelector(".preview-img");
// const cabezera = document.querySelector(".cabezera__header");
const fondo = document.querySelector(".preview-marco");

export default function previousView() {
  const viewBtn = document.querySelectorAll(".btn-ver");
  viewBtn.forEach((btn) => {
    btn.addEventListener("click", vistaPreviaImagenes);
  });
}

/* Lanzador de Vista previa de imagenes */
function vistaPreviaImagenes(item) {
  if (!item) return;
  // eventClassNames(cabezera, "add", "hidden");
  eventClassNames(fondo, "toggle", "hidden");
  // eventClassNames(fondo, "toggle", "fondo__activo");
  eventClassNames(previewImg, "toggle", "preview-marco");

  const target = item.target.offsetParent.children[0].childNodes[3];

  previewImg.setAttribute("class", "vistaPrevia");
  previewImg.setAttribute("src", target.getAttribute("src"));
  fondo.addEventListener("click", fondoPreviousView);
}

function fondoPreviousView() {
  // if (cabezera) cabezera.classList.remove("hidden");
  if (fondo) {
    fondo.classList.add("hidden");
    // fondo.classList.remove("fondo__activo");
  }
  // if (previewImg) {
  previewImg.classList.add("hidden");
  //   previewImg.classList.remove("preview-marco");
  // }
}
