<?php
   include_once('db.php');

   $LotNum = $_POST['LotNum'];
  
  if(mysqli_query($con,"DELETE FROM store WHERE LotNum = '$LotNum'"))
      header("Refresh: 1; URL =view.php");
   
   else
      header("Refresh: 1; URL =view.php");
?>