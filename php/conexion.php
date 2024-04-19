<?php
$DB_Host = 'localhost';
$DB_Name = 'darcodb';
$DB_User = 'root';
$DB_Pass = '';


try {
$conexion = new PDO("mysql:host=$DB_Host; dbname=$DB_Name",$DB_User,$DB_Pass);
$conexion->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
$conexion->exec("SET CHARACTER SET utf8");    
//echo 'Conexion Exitosa';
} catch (Exception $e) {
    echo'Lo Sentimos Hubo un Error al conectar a la Base de Datos '. $e->getMessage();
}
?>