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
}