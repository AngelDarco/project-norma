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


    try {

    if(isset($nombre)||isset($talla)|| isset($precio)||isset($colores)||isset($genero)||isset($stock)||isset($imagen)){
    $sql = "INSERT INTO productosnorma (nombre, talla, precio, colores, genero, descripcion, stock, imagen)
                    VALUES (:nombre, :talla, :precio, :colores, :genero, :descripcion,:stock, :imagen)";
    $result = $conexion->prepare($sql);
    $result->execute(array(':nombre'=>$nombre, ':talla'=>$talla, ':precio'=>$precio,
                        ':colores'=>$colores, ':genero'=>$genero, ':descripcion'=>$descripcion, ':stock'=>$stock, ':imagen'=>$imagen));
    
    echo json_encode('agregado');
    $result->closeCursor();
    $sql = null;
    $conexion = null;
    
    }else echo json_encode('Lo sentimos Algo Salio mal al insertar tus datos');
    
            //code...
        } catch (Exception $th) {
            $sql = null;
            $conexion = null;
            echo 'Error: '. $th->getMessage();
        }

?>