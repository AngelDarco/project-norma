export default function botonMenu(menuShow) {
  const viewport = document.querySelector("html");
  const menu = document.getElementById("menu");
  const observer = new ResizeObserver((e) => {
    if (e[0].contentRect.width > 650) {
      menuShow.classList.remove("hidden");
      menuShow.classList.add("responsive");
      menu.classList.add("hidden");
    } else {
      menuShow.classList.add("hidden");
      menu.classList.remove("hidden");
    }
  });

  observer.disconnect();
  if (viewport) observer.observe(viewport);

  menu.addEventListener("click", () => {
    menu.classList.toggle("rotar");
    menuShow.classList.toggle("hidden");
    menu.style.transition = ".3s";
  });
}
