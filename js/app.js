import { imgsHeader,womans,mens,kids,all} from "./imgs.js";
 
const mostrador = document.querySelector(".marco");
const fondo = document.querySelector(".fondo");
const cabezera = document.querySelector(".cabezera__header");
const izquierda = document.querySelector(".fa-backward");
const derecha = document.querySelector(".fa-forward");
const header = document.querySelector(".slider__header");
const gridImgs = document.querySelector(".img__main");
const filtros = document.querySelectorAll('.filtro');
const home = document.querySelector('.home');
const favoritos = document.querySelector('.corazon');
const menu = document.querySelector(".menu");
const menuShow = document.querySelector(".menu__header");
const menuFondo = document.querySelector('.fondo__header');
let a,b,c,d,e,f;


document.addEventListener("DOMContentLoaded", function () {
    cockies();
    bucleMostrar(all);
    mostrarControles();
    //slider();
    fondoFiltro();
    botonMenu();
    botonFavoritos();
    botonHome();
    filtroImagenes();
    cambioImagen();
    querys();
}); // Llave final del Main



    /* Local Storage */
function cockies(){
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
  if (e>= 2) localStorage.setItem('id3',all.length) 
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
function botonFavoritos(){
    /*  Mostrar Favoritos - Corazon Principal */
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
              
        if(favoritos.classList.contains('fas')){
        if(!isNaN(data)&&data!=0){      
           for(let i = 0; i < data; i++){              
            arrayFavoritos[i]=localStorage.getItem(i+1);
          } 
           bucleBorrar();
           bucleMostrar(arrayFavoritos); 
        }else{
            bucleBorrar();
        }

      }else{
        bucleBorrar();
        bucleMostrar(all);
      } 
  });  

};
function botonHome(){
  
  home.addEventListener('click',e => {
    if(favoritos.classList.contains('fas'))
      favoritos.classList.remove('fas');
    bucleBorrar(); 
    bucleMostrar(all);

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
             e.addEventListener('click', ()=>{
             e.classList.toggle('fas');
             e.classList.toggle('corazon__pulsado');
            /* ------------------------------- */
            let img = e.previousSibling.getAttribute('src');
            let clase = e.classList[3];
                
            if(clase!=undefined){
              agregarFavoritos(img);              
            }else{
              eliminarFavoritos(img); 
                if(favoritos.classList.contains('fas')){
                }
            }
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
  let data = parseInt(localStorage.getItem('id3'));
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
      nodoImg.setAttribute('id',i);
      nodoIco.setAttribute('class','coral far fa-heart');
      for(let z = 0; z <= data; z++){
      if(localStorage.getItem(z)==miimg){
        nodoIco.setAttribute('class','coral far fa-heart fas corazon__pulsado');
      }
    }
      nodoDiv.appendChild(nodoImg);
      nodoDiv.appendChild(nodoIco);
      gridImgs.appendChild(nodoDiv);
       };
      eventoImagenes();
      meGusta();
      //cambioImagen();
};

      /* Borra las imagenes Antes de Mostrarlas */
function bucleBorrar(){
       while (gridImgs.firstChild) {
        gridImgs.removeChild(gridImgs.firstChild);
        }
        eventoImagenes()
};

      /* Filtrado de Imagenes */
function filtroImagenes(){

  filtros.forEach(e =>{
    e.addEventListener('click',(z)=>{
      if(favoritos.classList.contains('fas'))
      favoritos.classList.remove('fas');
      if(z.target.classList.contains('damas')){
        bucleBorrar();
        bucleMostrar(womans);

      }else if(z.target.classList.contains('caballeros')){      
        bucleBorrar();
        bucleMostrar(mens);
        
      }else if(z.target.classList.contains('ninos')){
        bucleBorrar();
        bucleMostrar(kids);

      }else if(z.target.classList.contains('casa')){
        bucleBorrar();
        bucleMostrar(all);

      }
    });
  });
};

        /* Detector Imagenes en el Grid */
function eventoImagenes(){
  const imagenes = document.querySelectorAll(".grid");
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
    let nodo = document.createElement('img'); 
    let img = marco.getAttribute('src');
    let id = marco.getAttribute('id');
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
    let array = document.querySelectorAll('.grid');
    let padre = e.target.parentNode;
    let hijo = padre.lastChild;
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

         // Lanzador de Imagenes en el Header 
  function slider() {
    let timeIni;
    let contador = 0;
    timeIni = setInterval(function () {
      let miimg = imgsHeader[contador];
      const construye = `<img  src="${miimg}" alt="" class="slider img1">`;
      header.innerHTML = construye;
      contador++;
      if (contador >= imgsHeader.length) contador = 0;
    }, 3500);
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