import login from "./login.js";
import logout from "./logout.js";

export default function Log(){
    const btnLogout = document.querySelector('.salir');
    const btnLogin = document.querySelector('.usuario');
    
    if(!localStorage.getItem('session')){
        // No Session Founded
        btnLogin.classList.remove('hiden');
        btnLogout.classList.add('hiden');
        
        btnLogin.addEventListener('click', login);
        
        
        console.log('log functon working in it')

    }else{
        //Session Opened
        btnLogin.classList.add('hiden')
        btnLogout.classList.remove('hiden')

        btnLogout.addEventListener('click',logout);
        console.log('session init')
        
    }

}