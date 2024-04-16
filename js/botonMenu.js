export default function botonMenu(menuShow) {
  const header = document.querySelector(".header");
  const menu = document.getElementById("menu");
  if (menuShow instanceof HTMLElement) return;
  const observer = new ResizeObserver((e) => {
    if (e[0].contentRect.width > 650) {
      menuShow.classList.remove("ocultar");
      menu.classList.add("ocultar");
    } else {
      menuShow.classList.add("ocultar");
      menu.classList.remove("ocultar");
    }
  });

  observer.disconnect();
  observer.observe(header);

  menu.addEventListener("click", () => {
    menu.classList.toggle("rotar");
    menuShow.classList.toggle("ocultar");
    menu.style.transition = ".3s";
  });
}
