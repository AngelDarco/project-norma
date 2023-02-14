export default function botonMenu(menuShow){
const header = document.querySelector(".header");

    const observer = new ResizeObserver((e)=>{
      if(e[0].contentRect.width > 650){
      menuShow.classList.remove('ocultar');
      menu.classList.add('ocultar');  
    }else{
      menuShow.classList.add('ocultar');
      menu.classList.remove('ocultar');    
      menu.addEventListener('click', ()=>{
        menu.classList.toggle('rotar');
        menuShow.classList.toggle('ocultar');
        menu.style.transition='1s';
        if(carroContent.classList.contains('fa-shopping-cart')) 
        carroContent.classList.replace('fa-shopping-cart','fa-cart-plus');
    });
    }
  })
  observer.observe(header);
};