<<<<<<< HEAD
<?php

include("cn.php");

if (isset($_REQUEST['id'])) {
    $id = $_REQUEST['id'];
    
    $query = $cn->prepare("DELETE FROM personas WHERE id = ?");
    
    if ($query->execute([$id])) {
        $data = true;
    }
    
    echo json_encode($data);
=======
<?php

include("cn.php");

if (isset($_REQUEST['id'])) {
    $id = $_REQUEST['id'];
    
    $query = $cn->prepare("DELETE FROM personas WHERE id = ?");
    
    if ($query->execute([$id])) {
        $data = true;
    }
    
    echo json_encode($data);
>>>>>>> f1a955c72d5dc774445b0d6d04e05f46143e61d0
}