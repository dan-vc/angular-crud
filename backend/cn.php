<?php

// Definimos un header para permitir peticiones de otros lados
header("Access-Control-Allow-Origin: *");

try {
    // Variables de conexion
    $host = 'localhost';
    $db = 'angular-crud';
    $usuario = 'root';
    $contraseña = '';

    // creamos la conexion PDO
    $cn = new PDO("mysql:host=$host;dbname=$db", $usuario, $contraseña);

} catch (PDOException $e) {
    // Obtenemos el error y lo imprimimos
    print "¡Error!: " . $e->getMessage();
    die();
}