<<<<<<< HEAD
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
=======
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
>>>>>>> f1a955c72d5dc774445b0d6d04e05f46143e61d0
}