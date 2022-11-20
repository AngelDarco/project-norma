<?php

require 'conexion.php';

$nombre     = $_POST['nombre'];
$talla      = $_POST['talla'];
$precio     = $_POST['precio'];
$colores    = $_POST['colores'];
$genero     = $_POST['genero'];
$descripcion = $_POST['descripcion'];
$stock      = $_POST['stock'];
$imagen     = $_POST['imagen'];


    

    if(!empty($nombre)&&!empty($precio)&&!empty($colores)&&$genero!=0&&!empty($stock)&&!empty($imagen)){
try {
    $sql = "INSERT INTO productosnorma (nombre, talla, precio, colores, genero, descripcion, stock, imagen)
                    VALUES (:nombre, :talla, :precio, :colores, :genero, :descripcion,:stock, :imagen)";
    $result = $conexion->prepare($sql);
    $result->execute(array(':nombre'=>$nombre, ':talla'=>$talla, ':precio'=>$precio,
                        ':colores'=>$colores, ':genero'=>$genero, ':descripcion'=>$descripcion, ':stock'=>$stock, ':imagen'=>$imagen));
    
    echo json_encode('Agregado');
    $result->closeCursor();
    $sql = null;
    $conexion = null;
    
}catch (Exception $th) {
    $sql = null;
    $conexion = null;
    echo 'Error: '. $th->getMessage();
}


    }else echo json_encode('Vacio');

        
?>