export default function logout(){
    document.querySelector('.salir').addEventListener('click', () => {
         fetch('./logout.php')
             .then(res => res.json())
             .then(data => {
                 console.log(data);
                 Swal.fire({
                     position: 'center',
                     icon: 'error',
                     title: 'Debes Iniciar Sesion Primero',
                     showConfirmButton: false,
                     timer: 1000
                 });
             })
             .catch(err => console.log(err))
     })
}