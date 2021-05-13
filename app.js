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
//const car = document.querySelector(".carro");
const menu = document.querySelector(".menu");
const menuShow = document.querySelector(".menu__header");
const menuFondo = document.querySelector('.fondo__header');

let foto = "";
let array = [];

document.addEventListener("DOMContentLoaded", function () {
  
  //console.log(all.length)
  secciones();
  mostrarControles();
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
            
            let img = e.previousSibling.getAttribute('src')
            let clase = e.className;
     
            mostrarFavoritos(img,clase);
            // console.log("Clase ",clase,"Img ",img);



        });  
    });      
  };



        /* Mostrar Favoritos */
function mostrarFavoritos(foto,clase){
  array.push(foto);
  let posicion = array.indexOf(foto);
  let local = localStorage;  
  

  local.setItem(`${foto}`,Math.floor(Math.random()*1000));
  
  
  console.log(local);
  if (!array.isEmpty&&clase.slice(-5)=='heart'){
    console.log("Borrando");
    array.splice(posicion);
    local.removeItem(`${foto}`);
    console.log("Nuevo Storage ",local);
  }
};




        /* Crea y Muestra Las Imagenes */
function bucleMostrar(mostrar){
let num1 = Math.ceil(Math.random()*(mostrar.length/3));
let num2 = Math.ceil(Math.random()*(mostrar.length/6));
let num3 = Math.ceil(Math.random()*(mostrar.length));
let array1 = [];
let array2 = [];
let array3 = [];  
let array4 = [];  
array1 = mostrar.slice(0,num1);
array2 = mostrar.slice(num1,num2);
array3 = mostrar.slice(num2,num3);
array4 = mostrar.slice(num3,-1);
let arrayTotal = [];
arrayTotal = array4.concat(array1).concat(array3).concat(array2)
/* console.log("num1",num1);
console.log("num2",num2);
console.log("num3",num3);

console.log("arrayTotal",arrayTotal.length);

 */
    for (let i = 0; i < arrayTotal.length; i++) {
      let miimg = arrayTotal[i];
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
      cambioImagen(arrayTotal);
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

 