import addDataBase from "./addDataBase.js";

export default function addCar() {
    addDataBase(buy,'.car')
  }
  
  // function add(z){
  function buy(z) {
    const user = window.localStorage.getItem('session');
    const carUser = user+'Car';
    const id = z.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[5].innerHTML;

    if (user) {
    //  add car
      if(!z.target.classList.contains('addCar')) {
        agregarCar(id,carUser);
        z.target.classList.replace('fa-cart-plus','fa-shopping-cart');
        z.target.classList.add('addCar');
    } else {
        eliminarCar(id,carUser);
        z.target.classList.replace('fa-shopping-cart','fa-cart-plus');
        z.target.classList.remove('addCar');
      }
    } else
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'You must be loged first',
        showConfirmButton: false,
        timer: 500
      })
  }


    /* Mostrar Favoritos */
    function agregarCar(id, user) {
      const data = JSON.parse(window.localStorage.getItem(user));
      const carData = { data: [] }
  
      if (!data) {
        carData.data.push(id)
        window.localStorage.setItem(user, JSON.stringify(carData));
      } else {
        carData.data.push(...data.data, id);
        window.localStorage.setItem
          (user, JSON.stringify(
            carData
          ));
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
    function eliminarCar(id,user) {
      const data = JSON.parse(window.localStorage.getItem(user));
      const datadislikes = { data: []}
      const res = data.data.filter(itm => itm != id )
      datadislikes.data = res
      window.localStorage.setItem(user, JSON.stringify(datadislikes));
  
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Borrado',
        showConfirmButton: false,
        timer: 500
      })
    };