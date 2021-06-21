document.addEventListener('DOMContentLoaded',()=>{
    const user = document.querySelector('.usuario');
    const logout = document.querySelector('.salir');

     fetch('/php/userData.php')
    .then(res=> res.json())
    .then(data => {

        if(data!='NotFound'){
            user.innerHTML = data;
            logout.classList.remove('ocultar');
                if(!logout.classList.contains('ocultar')){
            logout.addEventListener('click',()=>{
                window.location.href='/php/logout.php';
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Session Cerrada',
                    showConfirmButton: false,
                    timer: 1500,
                });
            });

          }
        }else if (data=='NotFound'){
            user.innerHTML = 'Invitado';
            logout.classList.add('ocultar');
        }
    
    
    })
    .catch(err=> console.log(err)) 

});