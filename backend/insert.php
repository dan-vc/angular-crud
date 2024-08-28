<?php

include("cn.php");

$nombres = $_REQUEST["nombres"];
$apellidos = $_REQUEST["apellidos"];

$query = $cn->prepare("SELECT * FROM personas WHERE nombres = :nombres AND apellidos = :apellidos");
$query->bindParam(':nombres', $nombres);
$query->bindParam(':apellidos', $apellidos);
$query->execute();

if ($query->rowCount() > 0) {
    $data = false;

} else {
    $query = $cn->prepare(
        "INSERT INTO personas(nombres, apellidos) 
        VALUES(:nombres, :apellidos)"
    );
    $query->bindParam(':nombres', $nombres);
    $query->bindParam(':apellidos', $apellidos);
    $query->execute();
    $data = true;

}



echo json_encode($data);