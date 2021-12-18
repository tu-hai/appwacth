<?php
    include './session.php';
    
    $id = $_GET['id'];
    $sql = "delete from user where IDuser = $id";

    if($conn->query($sql) == TRUE){
        header("location: user.php");
    }else{
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
?>