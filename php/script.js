document.addEventListener('DOMContentLoaded',()=>{

const cajacard = document.querySelector('.contenedor-cards');
const template = document.querySelector('.template-card').content;
const fragment = new DocumentFragment();

cards()

function cards(){

const datos = async ()=>{
    try {
        const res = await fetch('productosRead.php')
        const data =  await res.json()
/*         console.log(res)
        console.log(data) */
        creadorCards(data);
    } catch (error) {
        console.log(error);
    }
};datos();


const creadorCards = datos=>{


datos.forEach( item => {

template.querySelector('.card-front figure .img').setAttribute('src',item.imagen); 
template.querySelector('.card-front figure figcaption').innerHTML = item.codepro; 

template.querySelector('.card-front ul li .nombre').innerHTML = item.nombre; 
template.querySelector('.card-front ul li .talla').innerHTML = item.talla;
template.querySelector('.card-front ul li .precio').innerHTML = item.precio;
template.querySelector('.card-front ul li .stock').innerHTML = item.stock;
template.querySelector('.card-front ul li .genero').innerHTML = item.genero;


let nuevo = color(item.colores)


let nodo = template.querySelector('.card-front ul .li-color ').children[0];

template.querySelector('.card-front ul .li-color ').replaceChild(nuevo,nodo);





template.querySelector('.card-front ul li .span-descripcion').innerHTML = item.descripcion;

template.querySelector('.card-back figure .img2').setAttribute('src',item.imagen); 

const clone = template.cloneNode(true);
fragment.appendChild(clone);
  
})
    cajacard.appendChild(fragment);

}






}


const color = (dato)=>{
  let array = dato.split(',');
  let nodo='';
  let resultado = document.createElement('span');
  resultado.setAttribute('class','for-span colores');

  for(let i=0;i<array.length;i++){ 
    nodo = document.createElement('span');
     nodo.setAttribute('class',`color label ${array[i]}`);
    resultado.appendChild(nodo);
  }
 return resultado;
}





});