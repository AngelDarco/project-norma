import { imgsHeader,all,womans,mens,kids} from "./imgs.js";

const mostrador = document.querySelector(".marco");
const fondo = document.querySelector(".fondo");
const cabezera = document.querySelector(".cabezera__header");
const controles = document.querySelector(".controles");
const control1 = document.querySelector(".marco__izquierda");
const control2 = document.querySelector(".marco__derecha");
const header = document.querySelector(".slider__header");
const gridImgs = document.querySelector(".img__main");
const woman = document.querySelector(".damas");
const man = document.querySelector(".caballeros");
const kid = document.querySelector(".ninos");
const home = document.querySelector('.home');
const favoritos = document.querySelector('.corazon');
const menu = document.querySelector(".menu");
const menuShow = document.querySelector(".menu__header");
const menuFondo = document.querySelector('.fondo__header');

let foto = "";
let a;
let b;
let c;
let d;


document.addEventListener("DOMContentLoaded", function () {
     a = localStorage.getItem('id2');
     b = parseInt(a)
     c = localStorage.getItem('id');
     d = parseInt(c);

     if(!isNaN(b)){
       localStorage.setItem('id2',d);
       localStorage.setItem('id',d);
     }
    else localStorage.setItem('id2',0);
    
    

    
  secciones();
  mostrarControles();
  //headerImagenes();
  botones();

}); // Llave final del Main




 function botones(){
   menuFondo.addEventListener('click',()=>{
    menu.classList.toggle('rotar');
    menuFondo.classList.toggle('ocultar')
    menuShow.classList.toggle('ocultar');
    });

   menu.addEventListener('click', ()=>{
        menu.classList.toggle('rotar');
        menuShow.classList.toggle('ocultar');
        menu.style.transition='1s';
        menuFondo.classList.toggle('ocultar');
    });

    /*  Mostrar Favoritos - Corazon Principal */
    favoritos.addEventListener('click', ()=>{
        favoritos.classList.toggle('fas');
        if(menu.className!='ocultar'){
          menu.classList.remove('rotar');
          menuShow.classList.add('ocultar');
          menu.style.transition='1s';
          menuFondo.classList.add('ocultar');
          menuFondo.classList.add('ocultar')
          menuShow.classList.add('ocultar');
        }
         const clase = favoritos.className;
        if(clase.slice(-3)=='fas'){
          console.log('Entro',array);
          if(!array.isEmpty){
            bucleBorrar();
            bucleMostrar(array);
          }
        }else{
          bucleBorrar();
          bucleMostrar(all);
          console.log('Fuera');
        } 
    });  



};




      /* Favoritos -- En Construccion  */
function meGusta(){
    const favoritos2 = document.querySelectorAll('.coral');
    favoritos2.forEach(e=>{
             e.addEventListener('click', ()=>{
             e.classList.toggle('fas');
             e.classList.toggle('corazon__pulsado');
            /* ------------------------------- */
            let img = e.previousSibling.getAttribute('src');
            let clase = e.classList[3];

            if(clase!=undefined){              
              agregarFavoritos(img);
              console.log('like');
            }else{
              eliminarFavoritos(img);
              console.log('dislike');            
            }
        });  
    });      
  };

  

        /* Mostrar Favoritos */
function agregarFavoritos(img){  
  //let posicion = array.indexOf(img);

    let id = localStorage.getItem('id');
    let data = parseInt(id);
    if(isNaN(data)){
    data = 0;    
    localStorage.setItem('id',data);
    }
    data++;
    localStorage.setItem(data,img);
    localStorage.setItem('id',data);
};

function eliminarFavoritos(img){
     
    for(let i=100; i >= 1; i--){
     if(localStorage.getItem(i)==img){
       localStorage.removeItem(i);
     } 
 }
        let data = localStorage.getItem('id');
        let id = parseInt(data);
        id--;
       localStorage.setItem('id',id);
       console.log("FueraBorrar: ",id);
}











        /* Crea y Muestra Las Imagenes */
function bucleMostrar(arrayRandom){
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

    
   

    for (let i = 0; i < mostrar.length; i++) {
      let miimg = mostrar[i];
      const nodoDiv = document.createElement("div");
      const nodoImg = document.createElement("img");
      const nodoIco = document.createElement("i");
      
      nodoDiv.setAttribute('class','padreGrid');
      nodoImg.setAttribute("src", miimg);
      nodoImg.setAttribute("class", "grid");
      nodoIco.setAttribute('class','coral far fa-heart');
      nodoDiv.appendChild(nodoImg);
      nodoDiv.appendChild(nodoIco);
      gridImgs.appendChild(nodoDiv);
       };

      eventoImagenes();
      meGusta();
      cambioImagen(mostrar);
    //console.log("Mostrando Imagenes dentro");
};


function bucleBorrar(){
       while (gridImgs.firstChild) {
        gridImgs.removeChild(gridImgs.firstChild);
        }
        eventoImagenes()
      //console.log("Borrando Imagenes");
};


  function secciones() {
    var contador=0;
    woman.addEventListener('click',e => {
       bucleBorrar(); 
       bucleMostrar(womans);
       contador++
    });
    man.addEventListener('click',e => {
        bucleBorrar(); 
        bucleMostrar(mens);
        contador++
     });
    kid.addEventListener('click',e => {
        bucleBorrar(); 
        bucleMostrar(kids);
        contador++;
     });
     home.addEventListener('click',e => {
      console.log(menu.className)
      if(menu.className!='ocultar'){
        menu.classList.remove('rotar');
        menuShow.classList.add('ocultar');
        menu.style.transition='1s';
        menuFondo.classList.add('ocultar');
        menuFondo.classList.add('ocultar')
        menuShow.classList.add('ocultar');
      };
        bucleBorrar(); 
        bucleMostrar(all);
        contador++
        console.log("El Home")
     });  

              //En Construcción
    /* car.addEventListener('click',e => {
        bucleBorrar(); 
        bucleMostrar(womans);
        contador++
     }); */

    
    if (contador==0) {
        bucleBorrar();
        bucleMostrar(all); 
    }
};



function eventoImagenes(){

  const imagenes = document.querySelectorAll(".grid");
  imagenes.forEach(function (e) {
    e.addEventListener("click", function () {
      foto = e.getAttribute("src");
      cambioImagenes();
    });
  });

  
   // console.log('en Mostrar')
};
 

        /* Lanzador de Vista previa de imagenes */
  function cambioImagenes() {
    if (mostrador.classList.toggle) {
      fondo.classList.toggle("fondo__activo");
      cabezera.classList.toggle("ocultar");
         // console.log("En el if ")
    }
    fondo.addEventListener("click", () => {
           // console.log("En el Else");
      controles.classList.add("ocultar");
      cabezera.classList.remove("ocultar");
      fondo.classList.remove("fondo__activo");
      mostrador.classList.remove("mostrador__activo");
    });
    
    mostrador.classList.toggle("mostrador__activo");
    mostrador.style.backgroundImage = `url(${foto})`;
       //console.log('mostrador: '+mostrador.className)
  };



        /* Controles */
  function mostrarControles() {
    mostrador.addEventListener("click", function () {
      controles.classList.toggle("ocultar");
      // console.log("En los controles");
    });
  };

        /* Cambio por los controles */
  function cambioImagen(all) {
   // console.log(all)
    let cuenta = all.length;
    control1.addEventListener("click", function () {
      if (cuenta == 0) cuenta = all.length;
      mostrador.style.backgroundImage = `url(${all[cuenta]})`;
      cuenta--;
      //console.log("Atras: "+cuenta);
    });
    control2.addEventListener("click", function () {
      if (cuenta == all.length) cuenta = 0;
      mostrador.style.backgroundImage = `url(${all[cuenta]})`;
      cuenta++;
      // console.log('Adelante: '+cuenta);
    });
  };

  
         // Lanzador de Imagenes en el Header 
  function headerImagenes() {
    let timeIni;
    let contador = 0;
    timeIni = setInterval(function () {
      let miimg = imgsHeader[contador];
      const construye = `<img  src="${miimg}" alt="" class="slider img1">`;
      header.innerHTML = construye;
      contador++;
      if (contador >= imgsHeader.length) contador = 0;
    }, 3500);
  }

 