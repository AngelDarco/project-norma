export default function botonMenu(menuShow) {
  const viewport = document.querySelector("html");
  const menu = document.getElementById("menu");
  const observer = new ResizeObserver((e) => {
    if (e[0].contentRect.width > 650) {
      menuShow.classList.remove("ocultar");
      menuShow.classList.add("responsive");
      menu.classList.add("ocultar");
    } else {
      menuShow.classList.add("ocultar");
      menu.classList.remove("ocultar");
    }
  });

  observer.disconnect();
  if (viewport) observer.observe(viewport);

  menu.addEventListener("click", () => {
    menu.classList.toggle("rotar");
    menuShow.classList.toggle("ocultar");
    menu.style.transition = ".3s";
  });
}
