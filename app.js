import { imgsHeader,all,womans,mens,kids} from "./imgs.js";
//import { all } from "./imgs.js";
//import { womans } from "./imgs.js";
//import { mens } from "./imgs.js";
//import { kids } from "./imgs.js";

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
//const car = document.querySelector(".carro");
const menu = document.querySelector(".menu");
const menuShow = document.querySelector(".menu__header");
const menuFondo = document.querySelector('.fondo__header');

let foto = "";

//const favoritos2 = document.querySelectorAll('.coral');

document.addEventListener("DOMContentLoaded", function () {
  
    
  secciones();
  mostrarControles();
  cambioImagen();
  headerImagenes();
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

    /*  Mostrar Corazon  */
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
    });  
    
    


};


      /* Favoritos -- En Construccion  */
function meGusta(){
     const favoritos2 = document.querySelectorAll('.coral');
      let contador = 0;
      let data = [];

    favoritos2.forEach(e=>{             

            e.addEventListener('click', ()=>{
              
             e.classList.toggle('fas');
             e.classList.toggle('corazon__pulsado');
             
        });  
    });      
  };


        /* Mostrar Favoritos */
function mostrarFavoritos(foto){
  //  if (foto.length!=0)


};


        /* Crea y Muestra Las Imagenes */
function bucleMostrar(mostrar){
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
        contador++
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
  function cambioImagen() {
    let cuenta = 0;
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

 