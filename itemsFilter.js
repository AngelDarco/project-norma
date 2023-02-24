import removeEvents from "./removeEvents.js";
import { loadObserver, fetchData, dataLocalStorage } from './mostrarCards.js';

export default async function itemsFilter() {
  const data = await Promise.resolve(fetchData()).then(data => data);
  const filtros = document.querySelectorAll('.filtro');
  const { removeCar, removeLikes, removeFilters } = removeEvents();
  const { likeData, carData } = dataLocalStorage();

  filtros.forEach(e => {

    e.addEventListener('click', (e) => {
      if (e.target.classList.contains('damas')) {
        let womans = data.filter(item => item.genero == 'Mujer');
        loadObserver(womans, likeData, carData);

      } else if (e.target.classList.contains('caballeros')) {
        let mens = data.filter(item => item.genero == 'Hombre');
        loadObserver(mens, likeData, carData);

      } else if (e.target.classList.contains('ninos')) {
        let kids = data.filter(item => item.genero == 'Niño');
        loadObserver(kids, likeData, carData);

      } else if (e.target.classList.contains('casa')) {
        loadObserver(data, likeData, carData);

      }
      removeCar();
      removeLikes();
      removeFilters();
    });
  });
};