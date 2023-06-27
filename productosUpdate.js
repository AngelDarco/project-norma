document.addEventListener('DOMContentLoaded',()=>{
    let key;
    while(key!='1994') key = prompt("Ingrese su Contraseña");

    const buscar = document.getElementById('buscar');
    const code = document.getElementById('codepro');
    const reset = document.getElementById('borrar');
    const resetImg = document.getElementById('c');
    
    const nombreCard = document.querySelector('.nombre');
    const tallaCard = document.querySelector('.talla');
    const precioCard = document.querySelector('.precio');
    const stockCard = document.querySelector('.stock');
    const generoCard = document.querySelector('.genero');
    const descripcionCard = document.querySelector('.span-descripcion');
    
    let form = document.getElementById('regForm');
    let card = document.querySelector('.img');
    let card2 = document.querySelector('.img2');
    let spancolor = document.querySelector('.colores');
    let colores = [];

    let producto = document.getElementById('nombre');
    let talla  = document.getElementById('talla');
    let precio = document.getElementById('precio');
    let stock  = document.getElementById('stock');
    let genero = document.getElementById('genero');
    let descripcion = document.getElementById('descripcion');
    let imagen = document.getElementById('imagen');
    let codigo = document.querySelector('figcaption');

    producto.addEventListener('blur',()=>
    nombreCard.innerHTML=producto.value);
    talla.addEventListener('blur',()=>
    tallaCard.innerHTML=talla.value.toUpperCase());
    precio.addEventListener('blur',()=>
    precioCard.innerHTML=precio.value);
    stock.addEventListener('blur',()=>
    stockCard.innerHTML=stock.value);
    genero.addEventListener('blur',()=>
    generoCard.innerHTML=genero.value);

   descripcion.addEventListener('blur',()=>{
    descripcionCard.innerHTML=descripcion.value;
   });

      imagen.addEventListener('blur', function(e){
       card.setAttribute('src',`${imagen.value}`);
      card2.setAttribute('src',`${imagen.value}`);
    });
    
      let color = document.getElementsByName('horns');
      color.forEach(item =>{
        item.addEventListener('blur', (e) => {
        if(item.checked){
          if(!colores.includes(item.value)){
             colores.push(item.value);
          }else return;
        spancolor.innerHTML+=`<span class='color label ${item.value}'></span>`;
        }
          if(item.checked==false){
            let colorDelete = colores.indexOf(item.value);
            colores.splice(colorDelete,1);
              if(spancolor.hasChildNodes){
              let child = document.querySelector(`.for-span .${item.value}`);           
                child.remove(); 
            } 
          }
    });
});
      /* Buscador */
buscar.addEventListener('click',()=>{
      let datos = new FormData(); 
      datos.append('code',code.value); 
      datos.append('accion','search');

      fetch('../productosUpdate.php',{
        method:'POST',
        body: datos
    })
    .then(res => res.json())
    .then(data =>{

        if(data!='NotFound'&&data!='Vacio'){
            resetear();

            producto.value = data[0].nombre;
            talla.value = data[0].talla;
            precio.value = data[0].precio;
            stock.value = data[0].stock;
            genero.value = data[0].genero;
            descripcion.value = data[0].descripcion;
            imagen.value = data[0].imagen;
            document.getElementById('codepro').value = data[0].codepro;

            nombreCard.innerHTML=producto.value;
            tallaCard.innerHTML=talla.value;
            precioCard.innerHTML=precio.value;
            stockCard.innerHTML=stock.value;
            generoCard.innerHTML=genero.value;
            descripcionCard.innerHTML=descripcion.value;
            codigo.innerHTML=data[0].codepro;
            card.setAttribute('src',data[0].imagen);
            card2.setAttribute('src',data[0].imagen);

            let color = data[0].colores;
            let color2 = color.split(',');

            color2.forEach(item =>{
              if(item=='') return;
                    colores.push(item);
                    spancolor.innerHTML+=`<span class='color label ${item}'></span>`;
                document.getElementById(`${item}`).checked=true;
              })

            producto.disabled=false;
            talla.disabled=false;
            precio.disabled=false;
            stock.disabled=false;
            genero.disabled=false;
            descripcion.disabled=false;
            imagen.disabled=false;
            actualizar.disabled=false;
            actualizar.classList.add('greenButton');
              
        }else if(data=='NotFound'){
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Producto no Encontrado',
                showConfirmButton: false,
                timer: 1500
              });

              producto.disabled=true;
              talla.disabled=true;
              precio.disabled=true;
              stock.disabled=true;
              genero.disabled=true;
              descripcion.disabled=true;
              imagen.disabled=true;
  
        }else if(data=='Vacio'){
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Debes llenar la casilla Primero',
                showConfirmButton: false,
                timer: 1500
              });
        }else{
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error no especificado',
            showConfirmButton: false,
            timer: 1500
          });
        }

    })
    .catch(err => {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error En la BBDD '+err,
            showConfirmButton: false,
            timer: 1500
          });
    
    });

})


      /* Actualizar */
form.addEventListener('submit', (e) => {
  let data = new FormData(form); 
    e.preventDefault();
    data.append('colores',colores);
    data.append('code',code.value); 
    data.append('accion','update');

     fetch('/php/productosUpdate.php',{
        method:'POST',
        body: data       
    })
      .then(response=>response.json())
      .then(data=>{
        if(data=="Vacio"){
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Por Favor Rellena Todos los Campos',
            showConfirmButton: false,
            timer: 1500
          });
         
        }else if(data=="Actualizado"){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto Actualizado Satisfactoriamente',
            showConfirmButton: false,
            timer: 1500
          });
              resetear();
        }else if(data=="NoActualizado"){
          Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Nada Actualizado',
            showConfirmButton: false,
            timer: 1500
          });
              resetear();
        } else{
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Lo Sentimos Hubo un Error en el Servidor',
            showConfirmButton: false,
            timer: 1500
          });
        }       
      })
      .catch(error => {
        console.log(error,"En el Catch");
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error no Especificado '+ error.message,
          showConfirmButton: false,
          timer: 1500
        });
    });
  });

  const resetear = ()=>{
    form.reset();
    colores=[];
      while(spancolor.firstChild) {
        spancolor.removeChild(spancolor.firstChild);
    };    
}; 

reset.addEventListener('click',()=>{
resetear();
  });

resetImg.addEventListener('click',()=>{
  imagen.value='';
})


});