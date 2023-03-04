<?php
    require 'conexion.php';
    $datos = [];
    $i=0;

    $code = $_POST['code'];
    $accion = $_POST['accion'];

    $nombre     = $_POST['nombre'];
    $talla      = $_POST['talla'];
    $precio     = $_POST['precio'];
    $colores    = $_POST['colores'];
    $genero     = $_POST['genero'];
    $descripcion = $_POST['descripcion'];
    $stock      = $_POST['stock'];
    $imagen     = $_POST['imagen'];


    if (!empty($code)&&$accion=='search'){
        try {
            $sql = "SELECT * FROM productosnorma WHERE codepro=$code";
            $result = $conexion->prepare($sql);
            $result->execute();
            $row = $result->rowCount();

            if($row!=0){
                
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
                    echo json_encode($datos);
                    $result->closeCursor();
                    $sql = null;
                    $conexion = null;

            } else  echo json_encode('NotFound');
            
        } catch (Exception $e) {
            echo json_encode('Error '.$e->getMessage());
        }
    
     }else if(!empty($code)&&$accion=='update'){
         try {
        $sql = "UPDATE productosnorma SET nombre=:nombre,talla=:talla,precio=:precio,colores=:colores,genero=:genero,descripcion=:descripcion,stock=:stock,imagen=:imagen                            
                    WHERE codepro=:codepro";
        $result = $conexion->prepare($sql);

        $result->bindParam(':codepro',$code);
        $result->bindParam(':nombre',$nombre);
        $result->bindParam(':talla',$talla);
        $result->bindParam(':precio',$precio);
        $result->bindParam(':colores',$colores);
        $result->bindParam(':genero',$genero);
        $result->bindParam(':descripcion',$descripcion);
        $result->bindParam(':stock',$stock);
        $result->bindParam(':imagen',$imagen);

        $result->execute();

        $row = $result->rowCount();
        if($row!=0) echo json_encode('Actualizado');
        else echo json_encode('NoActualizado');
        $result->closeCursor();
        $sql = null;
        $conexion = null;
         }catch (Exception $e){
             echo json_encode('Error '.$e->getMessage());
         }

    }else  echo json_encode('Vacio');