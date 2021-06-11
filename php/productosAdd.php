<?php

require 'conexion.php';

$nombre     = $_POST['nombre'];
$talla      = $_POST['talla'];
$precio     = $_POST['precio'];
$colores    = $_POST['colores'];
$genero     = $_POST['genero'];
$decripcion = $_POST['descripcion'];
$stock      = $_POST['stock'];
$imagen     = $_POST['imagen'];


    if($nombre==""||$talla==""||$precio==""||$colores==""||$genero==0||$stock==""||$imagen=="")
        echo json_encode('vacio');

    else if($nombre!=""||$talla!=""||$precio!=""/* ||$colores!="" */||$genero!=0||$stock!=""||$imagen!=""){
    $sql = "INSERT INTO productosnorma (nombre, talla, precio, colores, genero, decripcion, stock, imagen)
                    VALUES (:nombre, :talla, :precio, :colores, :genero, :descripcion,:stock, :imagen)";
    $result = $conexion->prepare($sql);
    $result->execute(array(':nombre'=>$nombre, ':talla'=>$talla, ':precio'=>$precio,
                        ':colores'=>$colores, ':genero'=>$genero, ':descripcion'=>$decripcion, ':stock'=>$stock, ':imagen'=>$imagen));
    
    echo json_encode('agregado');
    $result->closeCursor();
    
    }else echo json_encode('Lo sentimos Algo Salio mal al insertar tus datos');
    

?>