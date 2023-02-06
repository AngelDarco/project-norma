<?php
    require 'conexion.php';

    $userCode = $_POST['userCode'];
    $proCode = $_POST['proCode'];
    $accion = $_POST['accion'];

    $nombre     = $_POST['nombre'];
    $talla      = $_POST['talla'];
    $precio     = $_POST['precio'];
    $colores    = $_POST['colores'];
    $genero     = $_POST['genero'];
    $descripcion = $_POST['descripcion'];
    $stock      = $_POST['stock'];
    $imagen     = $_POST['imagen'];

    if(!empty($userCode)&&!empty($proCode)&&!empty($accion)){
        try {
                if($accion==='add'){
                    /* Agregar Productos */
            $sql = "INSERT INTO produsernorma (usercode, prodcode, nombre, talla, precio, colores, genero, descripcion, stock, imagen)
            VALUES (:usercode, :prodcode, :nombre, :talla, :precio, :colores, :genero, :descripcion,:stock, :imagen)";
            $result = $conexion->prepare($sql);
            $result->execute(array(':usercode'=>$userCode, ':prodcode'=>$proCode,  ':nombre'=>$nombre, ':talla'=>$talla, ':precio'=>$precio,
                            ':colores'=>$colores, ':genero'=>$genero, ':descripcion'=>$descripcion, ':stock'=>$stock, ':imagen'=>$imagen));
                            
            $row = $result->rowCount();
            if($row!=0) {echo json_encode('agregado');
            }else{ echo json_encode($row.' lineas afectadas Add ');}

            $result->closeCursor();
            $sql = null;
            $conexion = null;

                }else {
                    /* Borrrar Productos */
                $sql = "DELETE FROM produsernorma WHERE userCode = :userCode AND prodCode = :prodCode";
                $result = $conexion->prepare($sql);
                $result->bindParam(':userCode',$userCode);
                $result->bindParam(':prodCode',$prodCode);
                $result->execute(array(':userCode'=>$userCode, ':prodCode'=>$proCode));
                
                $row = $result->rowCount();
                    if($row!=0) {echo json_encode('eliminado');
                    }else {echo json_encode($row.' lineas afectadas Borrar ');}

                    $result->closeCursor();
                    $sql = null;
                    $conexion = null;
                }

        }catch (Exception $e){
            echo 'Error '. $e->getMessage();
        }
}