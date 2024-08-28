<?php

include("cn.php");

$id = $_REQUEST["id"];
$nombres = $_REQUEST["nombres"];
$apellidos = $_REQUEST["apellidos"];

$query = $cn->prepare(
    "UPDATE personas SET nombres = :nombres, apellidos = :apellidos WHERE id = :id"
);

$query->bindParam(':nombres', $nombres);
$query->bindParam(':apellidos', $apellidos);
$query->bindParam(':id', $id);

if ($query->execute()) {
    $data = true;
}

echo json_encode($data);