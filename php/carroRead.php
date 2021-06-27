<?php
session_start();
require 'conexion.php';

$usuario = $_SESSION['usuario'];
$id = $_SESSION['id'];

    if (isset($usuario)&&isset($id)){
        try {
    $resultado = new stdClass();
    $data = [];
    $i = 0;
    $sql = "SELECT * FROM produsernorma";
    $result = $conexion->prepare($sql);
    $result->execute();

    foreach($conexion->query($sql) as $row){
        $objeto = new stdClass();

        $objeto->codepro = $row['prodcode'];
        $data[$i]=$objeto;
        $i++;
    }
        $resultado = $data;
        header('Content-Type: application/json');
        echo json_encode($data);

        $result->closeCursor();
        $sql = null;
        $conexion = null;

    }catch (Exception $e){
      echo json_encode('Error '.$e->getMessage());

      $result->closeCursor();
      $sql = null;
      $conexion = null;
    }

}else  echo json_encode('No Data Found');