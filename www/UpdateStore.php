<?php
include_once('db.php');
	$LotNum = $_POST['LotNum'];
	$StoreName = $_POST['StoreName'];
	$PhoneNum = $_POST['PhoneNum'];

	if(mysqli_query($con,"UPDATE store SET StoreName='$StoreName', PhoneNum='$PhoneNum' WHERE LotNum='$LotNum'"))
		header("Refresh: 1; URL =view.php");
	
	else
		header("Refresh: 1; URL =view.php");
		
?>