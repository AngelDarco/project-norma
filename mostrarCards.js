export default function mostrarCards(array){
  console.log(array)

  if (array.length <= 0) return;
    let arrRandom = [];
    for(let i = 0; i < array.length; i++){
      arrRandom.push(array[Math.floor(Math.random()*array.length)])
    }
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1
    }
    const obsvr = document.querySelector('.observer');
    let count;
    arrRandom.length >= 3 ? count = 3 : count = arrRandom.length-1;
    const observer = new IntersectionObserver(entry =>{
      if(entry[0].isIntersecting){
        let arr = [];
        for(let i = 0; i < count; i++){
          arr.push(arrRandom[i]);
          arrRandom.shift();
        }
         createCards(arr);
      }
    }, options); 
    observer.observe(obsvr)
  };

  const createCards = (arr)=>{
    const template = document.querySelector('.template-card').content;
    const cajacard = document.querySelector('.img__main');
    const fragment = new DocumentFragment();
    
        let i = 0;
        arr.forEach( item => {
          const id = parseInt(localStorage.getItem('id3'));
          const corazon = template.querySelector('.card-back figure .coral');
          corazon.classList.remove('fas','far','fa-heart','corazon__pulsado');
          const carro = template.querySelector('.card-back figure .carroAdd');
          
        template.querySelector('.card-front figure .img').setAttribute('src',item.imagen); 
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
        template.querySelector('.card-back figure .img2').setAttribute('src',item.imagen); 
        template.querySelector('.card-back figure .img2').setAttribute('id',i); 
      
          /* Mostrar Corazon */
        if(!isNaN(id)){
        for(let x=1;x<=(id+1);x++){
         (item.codepro==localStorage.getItem(x))  
         ? corazon.classList.add('fas','fa-heart','corazon__pulsado') 
         : corazon.classList.add('far','fa-heart');
            }
        }else  corazon.classList.add('far','fa-heart');
      
          /* Mostrar Carrito */
       carro.classList.remove('fa','fa-cart-plus','fa-shopping-cart');
       let data = localStorage.getItem('carro');
      //  let data2 = data.split(' ');
      //  data2.forEach(code =>{
      //       if(code==item.codepro){
      //         carro.classList.remove('fa','fa-cart-plus','fa-shopping-cart');
      //         carro.classList.add('fa','fa-shopping-cart');
      //       }else {
      //         if(carro.classList.contains('fa-shopping-cart'))return;
      //         carro.classList.add('fa',"fa-cart-plus");}
      //     }) 
      
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
        i++;
        });
      
         cajacard.appendChild(fragment);
        //  eventoImagenes();
        //  meGusta();
        // await  carro();
      }