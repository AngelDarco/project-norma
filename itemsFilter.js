import removeEvents from "./removeEvents.js";
import { loadObserver, fetchData } from './mostrarCards.js';

export default async function itemsFilter() {
  const data = await Promise.resolve(fetchData()).then(data => data);
  const filtros = document.querySelectorAll('.filtro');
  const { removeCar, removeLikes, removeFilters } = removeEvents();

  filtros.forEach(e => {

    e.addEventListener('click', (e) => {
      if (e.target.classList.contains('damas')) {
        let womans = data.filter(item => item.genero == 'Mujer');
        loadObserver(womans, null, null);

      } else if (e.target.classList.contains('caballeros')) {
        let mens = data.filter(item => item.genero == 'Hombre');
        loadObserver(mens, null, null);

      } else if (e.target.classList.contains('ninos')) {
        let kids = data.filter(item => item.genero == 'Niño');
        loadObserver(kids, null, null);

      } else if (e.target.classList.contains('casa')) {
        loadObserver(data, null, null);

      }
      removeCar();
      removeLikes();
      removeFilters();
    });
  });
};