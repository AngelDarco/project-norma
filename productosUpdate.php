<?php
$code = $_POST['code'];
$accion = $_POST['accion'];

$image = '';

// search product by code    
if (!empty($code) && $accion === 'search')
    echo searchProduct($code);

// update product values
else if (!empty($code) && $accion === 'update') {
    $nombre = $_POST['fname'];
    $talla = $_POST['ltalla'];
    $precio = $_POST['lprecio'];
    $colores = $_POST['colores'];
    $genero = $_POST['genero'];
    $descripcion = $_POST['descripcion'];
    $stock = $_POST['lstock'];

    if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] == 0) {
        $image = $_FILES['imagen'];
        $imageName = $image['name'];
        $imageType = $image['type'];
        $imageSize = $image['size'];

        $imageTmpName = $image['tmp_name'];
        $imageFolder = 'imgs/';

        if ($imageType !== 'image/jpeg' && $imageType !== 'image/png' && $imageType !== 'image/jpg' && $imageType !== 'image/gif' && $imageType !== 'image') {
            echo json_encode('Error Image Type not supported');
        } else if ($imageSize > 2000000) {
            echo json_encode('Error Image Size muss be less than 2MB');
        } else {

            // Create the "imgs" folder if it doesn't exist
            if (!is_dir($imageFolder))
                mkdir($imageFolder, 0755, true);

            // move image from local to "imgs" in the server
            move_uploaded_file($imageTmpName, $imageFolder . $imageName);
            $image = $imageFolder . $imageName;
        }
    }

    echo updateProduct($code, $nombre, $talla, $precio, $colores, $genero, $descripcion, $stock, $image);

} else
    echo json_encode('Vacio');

function updateProduct($code, $nombre, $talla, $precio, $colores, $genero, $descripcion, $stock, $image)
{
    require 'conexion.php';
    try {

        $sql = "UPDATE productosnorma SET nombre=:nombre,talla=:talla,precio=:precio,colores=:colores,genero=:genero,descripcion=:descripcion,stock=:stock";

        if($image != ''){
            $sql .= ", imagen=:imagen";
        }

        $sql .= " WHERE codepro=:codepro";

        $result = $conexion->prepare($sql);

        $result->bindParam(':codepro', $code);
        $result->bindParam(':nombre', $nombre);
        $result->bindParam(':talla', $talla);
        $result->bindParam(':precio', $precio);
        $result->bindParam(':colores', $colores);
        $result->bindParam(':genero', $genero);
        $result->bindParam(':descripcion', $descripcion);
        $result->bindParam(':stock', $stock);

        if ($image != '')
            $result->bindParam(':imagen', $image);

        $result->execute();

        $row = $result->rowCount();
        if ($row != 0)
            return json_encode('Actualizado');
        else
            $result->closeCursor();
        $sql = null;
        $conexion = null;
        return json_encode('NoActualizado');
    } catch (Exception $e) {
        return json_encode('Error ' . $e->getMessage());
    }

}

function searchProduct($code)
{
    require 'conexion.php';
    $datos = [];
    $i = 0;

    try {
        $sql = "SELECT * FROM productosnorma WHERE codepro=$code";
        $result = $conexion->prepare($sql);
        $result->execute();
        $row = $result->rowCount();

        if ($row != 0) {
            foreach ($conexion->query($sql) as $row) {
                $objeto = new stdClass();
                $image = $row['img'];

                $objeto->codepro = $row['codepro'];
                $objeto->nombre = $row['nombre'];
                $objeto->talla = $row['talla'];
                $objeto->precio = $row['precio'];
                $objeto->colores = $row['colores'];
                $objeto->genero = $row['genero'];
                $objeto->descripcion = $row['descripcion'];
                $objeto->stock = $row['stock'];
                $objeto->imagen = $row['imagen'];

                $datos[$i] = $objeto;
                $i++;
            }
            $result->closeCursor();
            $sql = null;
            $conexion = null;
            return json_encode($datos);

        } else
            return json_encode('NotFound');

    } catch (Exception $e) {
        return json_encode('Error ' . $e->getMessage());
    }

}