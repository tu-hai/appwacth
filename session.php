<?php
    error_reporting(E_ALL & ~E_NOTICE);
    include './db.php';
    session_start();
    $email = $_SESSION['Gmail'];
    
	$conn->set_charset("utf8");
    mysqli_query($conn, "SET CHARACTER SET 'utf8'");

?>