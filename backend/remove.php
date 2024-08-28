<?php

include("cn.php");

if (isset($_REQUEST['id'])) {
    $id = $_REQUEST['id'];
    
    $query = $cn->prepare("DELETE FROM personas WHERE id = ?");
    
    if ($query->execute([$id])) {
        $data = true;
    }
    
    echo json_encode($data);
}