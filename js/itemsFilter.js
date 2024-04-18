import removeEvents from "./removeEvents.js";
import { loadObserver, fetchData, dataLocalStorage } from "./mostrarCards.js";

export default async function itemsFilter() {
  const data = await Promise.resolve(fetchData()).then((data) => data);
  const filtros = document.querySelectorAll(".filtro");
  const { removeCar, removeLikes, removeFilters } = removeEvents();

  filtros.forEach((e) => {
    e.addEventListener("click", (e) => {
      const { likeData, carData } = dataLocalStorage();
      if (e.target.classList.contains("damas")) {
        let womans = data.filter((item) => item.genero == "Woman");
        loadObserver(womans, likeData, carData);
      } else if (e.target.classList.contains("caballeros")) {
        let mens = data.filter((item) => item.genero == "Man");
        loadObserver(mens, likeData, carData);
      } else if (e.target.classList.contains("ninos")) {
        let kids = data.filter((item) => item.genero == "kids");
        loadObserver(kids, likeData, carData);
      } else if (e.target.classList.contains("casa")) {
        loadObserver(data, likeData, carData);
      }
      removeCar();
      removeLikes();
      removeFilters();
    });
  });
}
