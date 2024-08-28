<?php

// Incluimos la conexion
include("cn.php");

// Iniciamos con la data vacia
$data = [];

// Preparamos la sentencia
$query = $cn->prepare("SELECT * FROM personas");

// Ejecutamos
if ($query->execute()) {

    // Verificamos que devuelva registros
    if ($query->rowCount() > 0) {
        while ($row = $query->fetchObject()) {
            // Añadimos los registros al array
            $data[] = $row;
        }
    }
}

// Mostramos la data en formato JSON
echo json_encode($data);