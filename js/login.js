document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById('formulario');

    form.addEventListener('submit', e =>{
        e.preventDefault();

        fetch('/php/userData.php')
        .then(resp => resp.json())
        .then(data => {
            if(data!='NotFound'){
                Swal.fire({
                    title: 'Sesion Ya Iniciada',
                    text: "Debes crerrarla Primero, para iniciar Otra!",
                    icon: 'info',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Cerrar'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Deleted!',
                        'Sesion Cerrarda',
                        'success'
                      )
                        window.location="/php/logout.php";
                    }
                  })
            }else {

                const data = new FormData(form);
                fetch('/php/login.php', {
                    method:'POST',
                    body: data
                })
                   .then(resp => resp.json())
                   .then(data => {
                    
                        if(data=='true'){
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Session Iniciada',
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            form.reset();
                            window.location='/php/userData.php';
                            window.location='/index.html'; 
                        }
                        else if(data=="false"){
                        
                            Swal.fire({
                                position: 'center',
                                icon: 'warning',
                                title: 'Usuario no Registrado',
                                showConfirmButton: false,
                                timer: 1500,
                            });
        
                        }
                        else if(data=="vacio"){
        
                            Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: 'Llena todos los campos',
                                showConfirmButton: false,
                                timer: 1500,
                            });
        
                        }
        
                   })
                   .catch(err => {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Error no Especificado'+err,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                });



            }
        })
         .catch(err =>{
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Error no Especificado'+err,
                showConfirmButton: false,
                timer: 1500,
            });
         });



    })

});