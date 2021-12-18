<?php
    include './session.php';
    
    $id = $_GET['id'];
    $sql = "delete from sanpham where ID = $id";

    if($conn->query($sql) == TRUE){
        header("location: sanpham.php");
    }else{
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
?>