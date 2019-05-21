<?php

	// mysqli_query($con,"INSERT INTO store (LotNum,StoreName,PhoneNum) 
	// VALUES ('Glenn','Quagmire',33)");

	// mysqli_close($con);
include_once('db.php');

	$LotNum = $_POST['LotNum'];
	$StoreName = $_POST['StoreName'];
	$PhoneNum = $_POST['PhoneNum'];

	if(mysqli_query($con,"INSERT INTO store VALUES('$LotNum','$StoreName','$PhoneNum')"))
		header("Refresh: 1; URL =view.php");
	
	else
		header("Refresh: 1; URL =view.php");
		
?>