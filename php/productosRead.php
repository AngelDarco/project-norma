<?php
require 'conexion.php';
$response = new stdClass();
$datos = [];
$i=0;

ini_set('display_errors', 1);
error_reporting(E_ALL);

try {
$sql = "SELECT * FROM productosnorma";
$result = $conexion->prepare($sql);
$result->execute();

if (!$sql) {
    print_r($result->errorInfo());
    print_r($result->errorCode());
}


//while($row=$result->fetch(PDO::FETCH_ASSOC)){
    foreach($conexion->query($sql) as $row) {
    $objeto = new stdClass();

    $objeto->codepro = $row['codepro'];
    $objeto->nombre  = $row['nombre'];
    $objeto->talla   = $row['talla'];
    $objeto->precio  = $row['precio'];
    $objeto->colores = $row['colores'];
    $objeto->genero  = $row['genero'];
    $objeto->descripcion = $row['descripcion'];
    $objeto->stock   = $row['stock'];
    $objeto->imagen  = $row['imagen'];
    
    $datos[$i]=$objeto;
    $i++;
}

$response = $datos;
header('Content-Type: application/json');
echo json_encode($response);
$result->closeCursor();
$sql = null;
$conexion = null;

} catch (Exception $th) {
    $sql = null;
    $conexion = null;
    echo "Error: ".$th->getMessage();

}

?>
