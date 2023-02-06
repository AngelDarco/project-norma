export const carro = ()=>{   
const carrito = document.querySelectorAll('.carroAdd');
let accion;
carrito.forEach(item =>{
item.addEventListener('click', (e)=>{

    if(item.classList.contains('fa-cart-plus'))  {
        /* Agregar */
        item.classList.replace('fa-cart-plus','fa-shopping-cart');        
        fetch('./userData.php')
        .then(res => res.json())
        .then(data => {
            if(data!='NotFound'){
                  accion='add';
                        agregado(e,accion);
            }else{
                item.classList.replace('fa-shopping-cart','fa-cart-plus');        
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Debes Iniciar Sesion Primero',
                    showConfirmButton: false,
                    timer: 1000
                  });
            }
        })
    
    }else {
        /* Borrar */
        item.classList.replace('fa-shopping-cart','fa-cart-plus');
        
        fetch('./userData.php')
        .then(res => res.json())
        .then(data => {
            if(data!='NotFound'){
            item.classList.replace('fa-shopping-cart','fa-cart-plus');
                accion='delete';            
                        agregado(e,accion);
            }else{
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Error no Especificado',
                    showConfirmButton: false,
                    timer: 500
                  });
            }
        });
       };
    });
});

}

export const carroBbdd = ()=>{
    return fetch('./carroRead.php')
    .then(res => res.json())
    .then(data => {
      let cockie=[];
      if(data!='No Data Found'){
      data.forEach(code =>{
        cockie += code.codepro+' ';
        })
    }
     return localStorage.setItem('carro',cockie);
    })
    .catch(err=>{
      console.log(err);
    });
};

function agregado(e,accion){

let figure,cardBack,cardCont,cardFront,
figureF,figcaption,fragment,li0,li1,
li2,li3,li4,li5,li6,color2,color3,nombre,
talla, precio,stock,genero,color1,
descripcion,ul,proCode,userCode;
let color = [];

figure = e.target.parentNode;
cardBack = figure.parentNode;
cardCont = cardBack.parentNode;
cardFront = cardCont.children[0]; 
figureF = cardFront.children[0];
figcaption = figureF.children[2];
proCode = figcaption.innerHTML;

fragment = cardFront.children[1];
ul = fragment.children
li0 = ul[0];
li1 = ul[1];
li2 = ul[2];
li3 = ul[3];
li4 = ul[4];
li5 = ul[5];
li6 = ul[6];

nombre = li0.children[0].innerHTML;
talla = li1.children[0].innerHTML;
precio = li2.children[0].innerHTML;
stock = li3.children[0].innerHTML;
genero = li4.children[0].innerHTML;
color1 = li5.children[0];
descripcion = li6.children[0].innerHTML;
color2 = color1.children

for(let i=0;i<color2.length;i++){
    color3 = color2[i].classList;
    color += color3[2]+',';
}

    fetch('./userData.php')
    .then(res => res.json())
    .then(data => {
        const bbdd = data.split(';');     
        userCode = bbdd[1];

            if(accion=='add'){
        let datos = new FormData();
        datos.append('userCode',userCode);
        datos.append('proCode',proCode);
        datos.append('accion',accion);
    
        datos.append('nombre',nombre);
        datos.append('talla',talla);
        datos.append('precio',precio);
        datos.append('stock',stock);
        datos.append('genero',genero);
        datos.append('colores',color);
        datos.append('descripcion',descripcion);
        
        fetch('./carro.php',{
            method:'POST',
            body: datos
        })
        .then(res => res.json())
        .then(data => {
            if(data=='agregado'){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Agregado al Carro',
                    showConfirmButton: false,
                    timer: 500
                  });
            }else{
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Lo sentimos hubo un error al agregar el producto',
                    showConfirmButton: false,
                    timer: 500
                  });
            }
        })
        .catch(err =>{
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Error no Especificado '+err,
                showConfirmButton: false,
                timer: 500
              });
        })
        
    }else{
        
        const dataD = new FormData();
            dataD.append('userCode',userCode);
            dataD.append('proCode',proCode);
            dataD.append('accion',accion);

        fetch('./carro.php',{
            method:'POST',
            body: dataD
        })
        .then(res => res.json())
        .then(data => {
            if (data=='eliminado'){
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Borrado',
                    showConfirmButton: false,
                    timer: 500
                  });
            }else{
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Lo sentimos hubo un error al Borrar',
                    showConfirmButton: false,
                    timer: 500
                  });
            }

        })
        .catch(err =>{
            console.log(err);
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Error no Especificado '+err,
                showConfirmButton: false,
                timer: 500
              });
        })




    }
















    })




};
