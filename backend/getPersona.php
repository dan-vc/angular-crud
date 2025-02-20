<<<<<<< HEAD
<?php

include("cn.php");

if (isset($_REQUEST['id'])) {
    $id = $_REQUEST['id'];
    
    $query = $cn->prepare("SELECT * FROM personas WHERE id = ?");
    
    if ($query->execute([$id])) {
        if ($query->rowCount() > 0) {
            while ($row = $query->fetchObject()) {
                $data = $row;
            }
        }
    }
    
    echo json_encode($data);
=======
<?php

include("cn.php");

if (isset($_REQUEST['id'])) {
    $id = $_REQUEST['id'];
    
    $query = $cn->prepare("SELECT * FROM personas WHERE id = ?");
    
    if ($query->execute([$id])) {
        if ($query->rowCount() > 0) {
            while ($row = $query->fetchObject()) {
                $data = $row;
            }
        }
    }
    
    echo json_encode($data);
>>>>>>> f1a955c72d5dc774445b0d6d04e05f46143e61d0
}