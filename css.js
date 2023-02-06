export const stylos = ()=>{
const cabezera = document.querySelector('.cabezera__header');

const footer = document.getElementById('footer');
 
  let scrollPos = 0;
  document.addEventListener('scroll',()=>{

    if (window.scrollY>screen.height-150){
      cabezera.style.background="#272424c7";
      cabezera.style.border="none";
    } else {
      cabezera.style.background="#0001";
      cabezera.style.borderTop="1 px solid grey";
      cabezera.style.borderBottom="1 px solid grey";
    }

  
    if ((document.body.getBoundingClientRect()).top > scrollPos){
      footer.classList.remove('ocultar');
    }else{
      footer.classList.add('ocultar');
    
    }
    
    scrollPos = (document.body.getBoundingClientRect()).top;



  });
}


