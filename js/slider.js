export default function slider(container, imgs) {
  if (container instanceof HTMLDivElement) {
    const nodo = document.createElement("img");
    let counter = 0;

    setInterval(() => {
      container.removeChild(container.firstElementChild);
      if (counter >= imgs.length) counter = 0;
      nodo.setAttribute("src", imgs[counter]);

      container.appendChild(nodo);
      counter++;
      container.appendChild(nodo);
    }, 5000);
  }
}
