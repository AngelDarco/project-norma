<?php
require 'conexion.php';
    $email = $_POST['email'];
    $pass = $_POST['pass'];


if(!empty($email)&&!empty($pass)){
   try{
    $sql = "SELECT * FROM registrosnorma WHERE email=:email AND password=:password";
    $result = $conexion->prepare($sql);
    $result->bindParam(':email',$email);
    $result->bindParam(':password',$pass);
    $result->execute();
   
    if($result->rowCount()!=0){
       // session_set_cookie_params(100000);
       
        session_start();
        $userdata = $result->fetch(PDO::FETCH_ASSOC);

       $_SESSION["usuario"] = $userdata["nombre"];
       $_SESSION["id"] = $userdata["id"];

        echo json_encode(['true',$_SESSION['usuario'],$_SESSION['id']]);

        $result->closeCursor();
        $sql = null;
        $conexion = null;
        
    }
    else {
        echo json_encode('false');
        $result->closeCursor();
        $sql = null;
        $conexion = null;
    }
   } catch (Exception $e){
       echo json_encode('Error: '.$e);
       $sql = null;
       $conexion = null;
   }

}else {
            echo json_encode('vacio');
        }
