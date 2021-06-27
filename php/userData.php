<?php
session_start();

$usuario = $_SESSION['usuario'];
$id = $_SESSION['id'];

    if (isset($usuario)&&isset($id))
         echo json_encode($usuario.';'.$id);
    else echo json_encode('NotFound');

