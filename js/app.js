'use strict';
import {stylos} from './css.js';

const cajacard = document.querySelector('.img__main');
const template = document.querySelector('.template-card').content;
const fragment = new DocumentFragment();
 
const mostrador = document.querySelector(".marco");
const fondo = document.querySelector(".fondo");
const cabezera = document.querySelector(".cabezera__header");
const izquierda = document.querySelector(".fa-backward");
const derecha = document.querySelector(".fa-forward");
const slider = document.querySelector(".slider__header");
const filtros = document.querySelectorAll('.filtro');

const home = document.querySelector('.home');
const favoritos = document.querySelector('.corazon');
const menu = document.querySelector(".menu");
const menuShow = document.querySelector(".menu__header");
const menuFondo = document.querySelector('.fondo__header');
let a,b,c,d,e,f;


document.addEventListener("DOMContentLoaded", function () {
  
  const datos = async ()=>{
    try {
        const res = await fetch('/php/productosRead.php')
        const data =  await res.json()
       
        await cockies(data);
        await bucleMostrar(data);
        await botonFavoritos(data);
        await botonHome(data);
        await filtroImagenes(data);
        

    } catch (error) {
        console.log(error);
    }
};datos();


    mostrarControles();
    fondoFiltro();
    botonMenu();
    cambioImagen();
    querys();
    stylos();

}); // Llave final del Main


    /* Local Storage */
function cockies(data){
  a = localStorage.getItem('id2');
  b = parseInt(a)
  c = localStorage.getItem('id');
  d = parseInt(c);
  if(!isNaN(b)){
    localStorage.setItem('id2',d);
    localStorage.setItem('id',d);
  }
 else localStorage.setItem('id2',0);
  e = localStorage.getItem('id3');
  if (e >= data.length) localStorage.setItem('id3',data.length) 
};

    /* Funcionalidad botones del Header */
 function fondoFiltro(){
   menuFondo.addEventListener('click',()=>{
    menu.classList.toggle('rotar');
    menuFondo.classList.toggle('ocultar')
    menuShow.classList.toggle('ocultar');
    });
  
};
function botonMenu(){
  menu.addEventListener('click', ()=>{
    menu.classList.toggle('rotar');
    menuShow.classList.toggle('ocultar');
    menu.style.transition='1s';
    menuFondo.classList.toggle('ocultar');
});

};
function botonFavoritos(datos){
    /*  Mostrar Favoritos - Corazon Header  */
    favoritos.addEventListener('click', ()=>{
      favoritos.classList.toggle('fas');
      if(!menuShow.classList.contains('ocultar')){
        menu.classList.remove('rotar');
        menuShow.classList.add('ocultar');
        menu.style.transition='1s';
        menuFondo.classList.add('ocultar');
        menuFondo.classList.add('ocultar')
        menuShow.classList.add('ocultar');
      }
      
      let data = parseInt(localStorage.getItem('id3'));
      let arrayFavoritos=[];
      let local=[];
      let like;
              
        if(favoritos.classList.contains('fas')){
        if(!isNaN(data)&&data!=0){      
           for(let i = 0; i <= data; i++){    
            if(localStorage.getItem(i+1)!=null&&localStorage.getItem(i+1)!=undefined&&localStorage.getItem(i+1)!=""){
           arrayFavoritos[i]=localStorage.getItem(i+1);
            }else break
          } 
           bucleBorrar();
           for(let i=0;i<arrayFavoritos.length;i++){
           like = datos.filter(item=> item.codepro == arrayFavoritos[i]);
            local.push(like[0]);
           }
           bucleMostrar(local); 
        }else bucleBorrar();

      }else{
        bucleBorrar();
        bucleMostrar(datos);
      } 
  });  

};
function botonHome(data){
  
  home.addEventListener('click',e => {
    if(favoritos.classList.contains('fas'))
      favoritos.classList.remove('fas');
    bucleBorrar(); 
    bucleMostrar(data);

   if(!menuShow.classList.contains('ocultar')){
    menu.classList.remove('rotar');
    menuShow.classList.add('ocultar');
    menu.style.transition='1s';
    menuFondo.classList.add('ocultar');
    menuFondo.classList.add('ocultar')
    menuShow.classList.add('ocultar');
  };
    
   
    
 }); 
};

      /* Favoritos */
function meGusta(){
    const favoritos2 = document.querySelectorAll('.coral');

    favoritos2.forEach(e=>{
             e.addEventListener('click', (z)=>{
             e.classList.toggle('fas');
             e.classList.toggle('corazon__pulsado');
            /* ------------------------------- */

            let icono = e.parentNode;
            let nodos = icono.parentNode;
            let nodo2 = nodos.parentNode
            let nodo3 = nodo2.children
            let nodoF = nodo3[0].children;
            let nodoF1 = nodoF[0].children; 
            let code = nodoF1[2].innerHTML;

            let clase = e.classList[3];
            
            (clase!=undefined) ? agregarFavoritos(code)
                               : eliminarFavoritos(code); 
            
        });  
    });      
};
        /* Mostrar Favoritos */
function agregarFavoritos(img){  
  let a = parseInt(localStorage.getItem('id'));   
  let b = parseInt(localStorage.getItem('id3')); 
 
  if(!isNaN(a) && !isNaN(b) && a<b ){
    localStorage.setItem('id3',(b+1));
  }
 
    let id = localStorage.getItem('id');
    let data = parseInt(id);
    if(isNaN(data)){
    data = 0;    
    localStorage.setItem('id',data);
    }
    data++;
    localStorage.setItem(data,img);
    localStorage.setItem('id',data);
    
    if(isNaN(b) || a==b){
    localStorage.setItem('id3',data);
    }

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Guardado',
      showConfirmButton: false,
      timer: 500
    })
};
        /* Eliminar Favoritos */
function eliminarFavoritos(img){

let id3 = parseInt(localStorage.getItem('id3'));
let data = localStorage.getItem('id');
let id = parseInt(data);

    for(let i=id3; i >= 1; i--){
     if(localStorage.getItem(i)==img){
       localStorage.removeItem(i);
        id--; 
     } 
 }        
       localStorage.setItem('id',id);
       Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Borrado',
        showConfirmButton: false,
        timer: 500
      })
};


        /* Muestra Las Imagenes */
function bucleMostrar(array){

  let arrayRandom = array.filter(item=> item!=null);
  let mostrar=[];
  let llenarItems;
  let random;

  while(arrayRandom.length!=0){
      for(let item in arrayRandom){
      random = Math.ceil(Math.random()*(arrayRandom.length));
       while(arrayRandom[random]==undefined) {
        random = Math.ceil(Math.random()*arrayRandom.length-1);  
        random = 0;
      }
      llenarItems = arrayRandom[random]
      mostrar.push(llenarItems);
      arrayRandom.splice(random,1);  
      }
  };  

  let i = 0;
    mostrar.forEach( item => {

      const id = parseInt(localStorage.getItem('id3'));
      const corazon = template.querySelector('.card-back figure .coral');
      corazon.classList.remove('fas','far','fa-heart','corazon__pulsado')

    template.querySelector('.card-front figure .img').setAttribute('src',item.imagen); 
    template.querySelector('.card-front figure figcaption').innerHTML = item.codepro; 
    template.querySelector('.card-front ul li .nombre').innerHTML = item.nombre; 
    template.querySelector('.card-front ul li .talla').innerHTML = item.talla;
    template.querySelector('.card-front ul li .precio').innerHTML = item.precio;
    template.querySelector('.card-front ul li .stock').innerHTML = item.stock;
    template.querySelector('.card-front ul li .genero').innerHTML = item.genero;

    let nuevo = color(mostrar[i].colores);
    let nodo = template.querySelector('.card-front ul .li-color ').children[0];
    template.querySelector('.card-front ul .li-color ').replaceChild(nuevo,nodo);
  
    template.querySelector('.card-front ul li .span-descripcion').innerHTML = item.descripcion;
    template.querySelector('.card-back figure .img2').setAttribute('src',item.imagen); 
    template.querySelector('.card-back figure .img2').setAttribute('id',i); 

    if(!isNaN(id)){
    for(let x=1;x<=(id+1);x++){
     (item.codepro==localStorage.getItem(x))  
     ? corazon.classList.add('fas','fa-heart','corazon__pulsado') 
     : corazon.classList.add('far','fa-heart');
        }
    }else  corazon.classList.add('far','fa-heart');

    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
    i++;

    })
      cajacard.appendChild(fragment);
      eventoImagenes();
      meGusta();
    };

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


      /* Borra las imagenes Antes de Mostrarlas */
function bucleBorrar(){
       while (cajacard.firstChild) {
        cajacard.removeChild(cajacard.firstChild);
        }
        eventoImagenes()
};

      /* Filtrado de Imagenes */
function filtroImagenes(data){

  filtros.forEach(e =>{
    e.addEventListener('click',(z)=>{
      if(favoritos.classList.contains('fas'))
      favoritos.classList.remove('fas');

      if(z.target.classList.contains('damas')){
        let womans = data.filter(item => item.genero == 'Mujer');      
        bucleBorrar();
        bucleMostrar(womans);

      }else if(z.target.classList.contains('caballeros')){   
        let mens = data.filter(item => item.genero == 'Hombre');   
        bucleBorrar();
        bucleMostrar(mens);
        
      }else if(z.target.classList.contains('ninos')){
        let kids = data.filter(item => item.genero == 'Niño');
        bucleBorrar();
        bucleMostrar(kids);

      }else if(z.target.classList.contains('casa')){
        bucleBorrar();
        bucleMostrar(data);

      }
    });
  });
};

        /* Detector Imagenes en el Grid */
function eventoImagenes(){
  const imagenes = document.querySelectorAll(".btn-ver");
  imagenes.forEach(function (e) {
    e.addEventListener("click", function () {
      f=e;
      vistaPreviaImagenes(e);
    });
  });
};


        /* Lanzador de Vista previa de imagenes */
  function vistaPreviaImagenes(marco) {
    cabezera.classList.add("ocultar");
    fondo.classList.toggle("ocultar");
    fondo.classList.toggle("fondo__activo");
    mostrador.classList.toggle("ocultar")
    mostrador.classList.toggle("mostrador__activo");

    let padreimg = marco.parentNode;
    let nodoimg = padreimg.children[0];
    let imgbtn = nodoimg.children[1];

    let nodo = document.createElement('img'); 
    let img = imgbtn.getAttribute('src');
    let id = imgbtn.getAttribute('id');
    nodo.setAttribute('src',img);
    nodo.setAttribute('id',id);
    nodo.setAttribute('class','vistaPrevia');

    let viejo = mostrador.lastChild;
    let nuevo = mostrador.appendChild(nodo);
    if(mostrador.lastChild.nodeName=='IMG')
      mostrador.replaceChild(nuevo,viejo);
};

        /* Controles */
  function mostrarControles() {

mostrador.addEventListener("click", ()=> {
      izquierda.classList.toggle("ocultar");
      derecha.classList.toggle("ocultar");
}); 

fondo.addEventListener("click", () => {
  cabezera.classList.remove("ocultar");
  fondo.classList.add("ocultar");
  fondo.classList.remove("fondo__activo");
  mostrador.classList.add("ocultar");
  mostrador.classList.remove("mostrador__activo");
}); 

};
 

        /* Cambio Imagenes por los controles */
  function cambioImagen() {
    izquierda.addEventListener("click",(e)=> {  
      let signo = false;
      cambioNodos(e,signo);
      e.stopPropagation();
});


    derecha.addEventListener("click",(e)=> {
      let signo = true;
      cambioNodos(e,signo);
      e.stopPropagation();
  });
};
    /* Remplazo de Nodos - Cambio de Imagenes */
  function cambioNodos(e,signo){
    let num;
    let array = document.querySelectorAll('.img2'); //grid
    let padre = e.target.parentNode;
    let hijo = padre.children[2];
    let imgcambio = hijo.getAttribute('src');

    let id = hijo.getAttribute('id');
    let oldNode = mostrador.lastChild;

    if(signo){
    if (id>=(array.length-1))id=0
    num = parseInt(id)+1;
    }else{
      if (id==0)id=array.length
    num = parseInt(id)-1;
    }
    let nodonuevo = array[num];
    let img2 = nodonuevo.getAttribute('src');
    let id2 = nodonuevo.getAttribute('id');
     let newNode = document.createElement('img');
     newNode.setAttribute('src',img2);
     newNode.setAttribute('id',id2);
     newNode.setAttribute('class','vistaPrevia');
    mostrador.replaceChild(newNode,oldNode);
};

 function querys(){
   let pcs = window.matchMedia('(min-width: 800px)');
   let dispositivos = window.matchMedia('(max-width: 800px)');
   
   if (pcs.matches){
    menuShow.classList.remove('ocultar');
    menu.classList.add('ocultar');  
  }else if(dispositivos.matches){
    menuShow.classList.add('ocultar');
    menu.classList.remove('ocultar');
  }
} 