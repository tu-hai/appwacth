<?php
   session_start();
   unset($_SESSION['gmailadmin']);
   header("Location: login.php");
?>