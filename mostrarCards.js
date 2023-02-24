import eventClassNames from "./eventClassNames.js";

const container = document.querySelector('.img__main');


async function mostrarCards(like = false, car = false) {
  const responseData = await Promise.resolve(fetchData()).then(data => data);

  if (!responseData || responseData.length <= 0)
    return;
  const arr = responseData.sort((a, b) => Math.random() - 0.5);

const user = window.localStorage.getItem('session');
const likeData = JSON.parse(window.localStorage.getItem(user + 'Likes'));
const carData = JSON.parse(window.localStorage.getItem(user + 'Car'));

  if (like) {
    if (likeData) {
      loadObserver(filter(likeData, arr), likeData, carData);
    } else
      console.log('No favorite items found');
  } else if (car) {
    if (carData) {
      loadObserver(filter(carData, arr), likeData, carData);
    } else
      console.log('no car items found');
  } else {
    loadObserver(arr, likeData, carData);
  }
}

function filter(database, arr) {
  let data = [];
  for (let i = 0; i < database.data.length; i++) {
    for (let ii = 0; ii < arr.length; ii++) {
      if (database.data[i] === arr[ii].codepro)
        data.push(arr[ii]);
    }
  }
  return data;
}

function bucleBorrar() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

const loadObserver = (arrLoaded, likeData, carData) => {
  bucleBorrar();
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1
  }

  let count = 3;
  if (arrLoaded.length < 3) count = arrLoaded.length;
  (() => {
    let data = [];
    for (let i = 0; i < count; i++) {
      data.push(arrLoaded[0])
      arrLoaded.shift();
    }
    card(data, likeData, carData);
  })()

  if (container.hasChildNodes && arrLoaded.length !== 0) {
    const observer = new IntersectionObserver(entries => {
      let data = [];
      entries.forEach(entry => {
        if (arrLoaded.length === 0) return
        if (entry.isIntersecting) {
          for (let i = 0; i < count; i++) {
            data.push(arrLoaded[0]);
            arrLoaded.shift();
          }
          card(data, likeData, carData);
          observer.unobserve(entry.target);
          observer.observe(container.lastElementChild);
        }
      })
    }, options);
    observer.observe(container.lastElementChild);
  }
}

const card = (arr, likeData, carData) => {
  if (arr.length === 0) return
  const template = document.querySelector('.template-card').content;
  const corazon = template.querySelector('.card-back figure .heart');
  const carro = template.querySelector('.card-back figure .car');
  const fragment = new DocumentFragment();
  let i = 0;

  arr.forEach(item => {
    if (!item) return

    template.querySelector('.card-front figure .img').setAttribute('src', item.imagen);
    template.querySelector('.card-front figure figcaption').innerHTML = item.codepro;
    template.querySelector('.card-front ul li .nombre').innerHTML = item.nombre;
    template.querySelector('.card-front ul li .talla').innerHTML = item.talla;
    template.querySelector('.card-front ul li .precio').innerHTML = item.precio;
    template.querySelector('.card-front ul li .stock').innerHTML = item.stock;
    template.querySelector('.card-front ul li .genero').innerHTML = item.genero;

    // let nuevo = color(mostrar[i].colores);
    // let nodo = template.querySelector('.card-front ul .li-color ').children[0];
    // template.querySelector('.card-front ul .li-color ').replaceChild(nuevo,nodo);

    template.querySelector('.card-front ul li .span-descripcion').innerHTML = item.descripcion;
    template.querySelector('.card-back figure .img2').setAttribute('src', item.imagen);
    template.querySelector('.card-back figure .img2').setAttribute('id', i);


    
    /* Mostrar like */
    if (likeData.data.includes(item.codepro)){
      eventClassNames(corazon,'remove','far');
      eventClassNames(corazon,'remove','fa-heart');

      eventClassNames(corazon,'add','fas');
      eventClassNames(corazon,'add','fa-heart');
      eventClassNames(corazon,'add','like');

  }else{
    eventClassNames(corazon,'remove','fas');
    eventClassNames(corazon,'remove','fa-heart');
    eventClassNames(corazon,'remove','like');

    eventClassNames(corazon,'add','far');
    eventClassNames(corazon,'add','fa-heart');
  }
      
    /* Mostrar Car*/
      if (carData.data.includes(item.codepro)){
      eventClassNames(carro,'remove','fas')
      eventClassNames(carro,'remove','fa-cart-plus')

      eventClassNames(carro,'add','fas')
      eventClassNames(carro,'add','fa-shopping-cart')
      eventClassNames(carro,'add','like')

    }else{
      eventClassNames(carro,'remove','fas')
      eventClassNames(carro,'remove','fa-shopping-cart')
      eventClassNames(carro,'remove','like')

      eventClassNames(carro,'add','fas')
      eventClassNames(carro,'add','fa-cart-plus')
    }
      
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
    i++;
  });
  container.appendChild(fragment);
}

async function fetchData() {
  return await fetch('./productosRead.php')
    .then(data => data.json())
    .then(data => data);
}

export default mostrarCards;
export { loadObserver, fetchData };