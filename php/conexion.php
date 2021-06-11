<?php
/* 
$DB_Host = 'fdb27.freehostingeu.com';
$DB_Name = '3788800_darcobbdd';
$DB_User = '3788800_darcobbdd';
$DB_Pass = '922494eMe';
 */




$DB_Host = 'localhost';
$DB_Name = 'norma';
$DB_User = 'root';
$DB_Pass = '';



try {
$conexion = new PDO("mysql:host=$DB_Host; dbname=$DB_Name",$DB_User,$DB_Pass);
$conexion->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    //echo 'Conexion Exitosa';
} catch (Exception $e) {
    echo'Lo Sentimos Hubo un Error al conectar a la Base de Datos '. $e->getMessage;
}

?>