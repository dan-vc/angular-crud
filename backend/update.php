<<<<<<< HEAD
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

=======
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

>>>>>>> f1a955c72d5dc774445b0d6d04e05f46143e61d0
echo json_encode($data);