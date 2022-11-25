document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById('formulario');

    (async ()=>{
        if(localStorage.getItem('user')){ 
            window.location = '../index.html'
        return;
    }
        await fetch('../userData.php')
        .then(resp => resp.json())
        .then(data => data!='NotFound' && localStorage.setItem('user',data[0]))
        .catch(err =>{
               Swal.fire({
                   position: 'center',
                   icon: 'error',
                   title: 'Error no Especificado'+err,
                   showConfirmButton: false,
                   timer: 1500,
               });
            });
    })();

    form.addEventListener('submit', e =>{
        e.preventDefault();

                const data = new FormData(form);
                fetch('../login.php', {
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
                            window.location='../userData.php';
                            window.location='../index.html'; 
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


    })

});