<?php
require 'conexion.php';

$name = $_POST['nombre'];
$lname = $_POST['apellido'];
$email = $_POST['email'];
$password = $_POST['pass'];


     if (!empty($name)&&!empty($lname)&&!empty($email)&&!empty($password)){ 
try {
        $sql2 = "SELECT email FROM registrosnorma WHERE email=:email";
        $result2 = $conexion->prepare($sql2);
        $result2->execute(array(':email'=>$email));
        if ($result2->rowcount()){
            echo json_encode('existente');
        }else{
$sql = "INSERT INTO registrosnorma (name,lastname,email,password) VALUES (:nombre,:lname,:email,:password)";
$result = $conexion->prepare($sql);
$result->execute(array(':nombre'=>$name,':lname'=>$lname,':email'=>$email,':password'=>$password));
echo json_encode('registrado');
    $result->closeCursor();
    $sql = null;
    $conexion = null;
        }
}

catch(Exception $e){
    echo json_encode('Error '.$e->getMessage());
    $sql = null;
    $conexion = null;
}

     } else  echo json_encode("vacio");

     ?>