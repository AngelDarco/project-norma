'use strict';
import {stylos} from './css.js';
// import {carro,carroBbdd} from './carro.js';
import log from './log.js';
import botonMenu from './botonMenu.js';
import mostrarCards from './mostrarCards.js';

const cajacard = document.querySelector('.img__main');
 
const mostrador = document.querySelector(".marco");
const fondo = document.querySelector(".fondo");
const cabezera = document.querySelector(".cabezera__header");
const izquierda = document.querySelector(".fa-backward");
const derecha = document.querySelector(".fa-forward");
const filtros = document.querySelectorAll('.filtro');
const carroContent = document.querySelector('.carro i');

const home = document.querySelector('.home');
const favoritos = document.querySelector('.corazon');
const menu = document.getElementById("menu");
const menuShow = document.querySelector(".menu__header");
const menuFondo = document.querySelector('.fondo__header');

document.addEventListener("DOMContentLoaded", function () {
  log();
    botonMenu(menuShow);
    Promise.resolve(fetchData()).then(data =>{
    mostrarCards(data);
    
    // botonFavoritos(arrData);
    // mostrarControles();
    // fondoFiltro();
    // botonMenu();
    // cambioImagen();
    // querys();
    stylos();

  });


}); // Llave final del Main


  async function fetchData(){
     return await fetch('./productosRead.php')
    .then(data=>data.json())
    .then(data => data);
  }

    /* Local Storage */
function cockies(data){
  const d = parseInt(localStorage.getItem('id'));
  if(!isNaN(parseInt(localStorage.getItem('id2')))){
    localStorage.setItem('id2',d);
    localStorage.setItem('id',d);
  }
 else localStorage.setItem('id2',0);
  if (localStorage.getItem('id3') >= data.length) 
  localStorage.setItem('id3',data.length) 
};




function botonFavoritos(datos){
    /*  Mostrar Favoritos - Corazon Header  */
    favoritos.addEventListener('click', ()=>{
      favoritos.classList.toggle('fas');
      if(!menuShow.classList.contains('ocultar')){
        menu.classList.remove('rotar');
        menuShow.classList.add('ocultar');
        menu.style.transition='1s';
        // menuFondo.classList.add('ocultar');
        // menuFondo.classList.add('ocultar')
        menuShow.classList.add('ocultar');
      };
      if(carroContent.classList.contains('fa-shopping-cart')) 
      carroContent.classList.replace('fa-shopping-cart','fa-cart-plus');
      
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
          for(let i=0;i<arrayFavoritos.length;i++){
            like = datos.filter(item=> item.codepro === arrayFavoritos[i]);
            local.push(like[0]);
          }
          bucleBorrar();
           console.log(datos)
           console.log(local)
           mostrarCards(local); 
        }else bucleBorrar();

      }else{
        bucleBorrar();
        mostrarCards(data);
      } 
  });  

};
function botonHome(data){
  
  home.addEventListener('click',e => {
    if(favoritos.classList.contains('fas'))
      favoritos.classList.remove('fas');
      if(carroContent.classList.contains('fa-shopping-cart')) 
      carroContent.classList.replace('fa-shopping-cart','fa-cart-plus');
    bucleBorrar(); 
    bucleMostrar(data);

   if(!menuShow.classList.contains('ocultar')){
    menu.classList.remove('rotar');
    menuShow.classList.add('ocultar');
    menu.style.transition='1s';
    menuShow.classList.add('ocultar');
  };
    
   
    
 }); 
};
function botonCarro(data){

  if(!menuShow.classList.contains('ocultar')){
    menu.classList.remove('rotar');
    menuShow.classList.add('ocultar');
    menu.style.transition='1s';
    menuShow.classList.add('ocultar');
  };
      carroContent.addEventListener('click',e =>{

        if (carroContent.classList.contains('fa-cart-plus')) {
              /* Dentro */
          carroContent.classList.replace('fa-cart-plus','fa-shopping-cart');
          let local = localStorage.getItem('carro');
          let code = local.split(' ');
          let array = [];

            for( var i=0; i<data.length; ++i){
             for( var z=0; z<code.length; ++z){  
                if(data[i].codepro==code[z]){
                array[z] = data[i];
              }
            }
          }
              bucleBorrar();
              bucleMostrar(array);
        }else{
              /* Fuera */
          carroContent.classList.replace('fa-shopping-cart','fa-cart-plus');
              bucleBorrar();
              bucleMostrar(data);
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
    };


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

