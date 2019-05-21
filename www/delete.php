<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="">
	<meta name="author" content="">
	<link rel="icon" href="images/favicon.ico">
	<title>Delete Store</title>

	<!-- Bootstrap core CSS -->
	<link href="dist/css/bootstrap.min.css" rel="stylesheet">
	
	<!-- Icons -->
	<link href="css/font-awesome.css" rel="stylesheet">
	<link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet">
	
	<!-- Custom styles for this template -->
	<link href="css/style.css" rel="stylesheet">
	
</head>
<body>
	<div class="container-fluid" id="wrapper">
		<div class="row">
			<nav class="sidebar col-xs-12 col-sm-4 col-lg-3 col-xl-2">
				<h1 class="site-title"><a href="index.html"><em class="em em-woman-walking"></em>WAYFINDER</a></h1>
				<a href="#menu-toggle" class="btn btn-default" id="menu-toggle"><em class="fa fa-bars"></em></a>
				<ul class="nav nav-pills flex-column sidebar-nav">
                    <li class="nav-item"><a class="nav-link active" href="index.html"><em class="fa fa-dashboard"></em> Dashboard <span class="sr-only">(current)</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="add.html"><em class="fa fa-pencil-square-o"></em> Add Store</a></li>
                    <li class="nav-item"><a class="nav-link" href="delete.php"><em class="fa fa-pencil-square-o"></em> Delete Store</a></li>
                    <li class="nav-item"><a class="nav-link" href="update.php"><em class="fa fa-pencil-square-o"></em> Update Store</a></li>
                    <li class="nav-item"><a class="nav-link" onclick="logout()"><em class="fa fa-dashboard"></em> Signout</a></li>
                </ul>
				</nav>

			<main class="col-xs-12 col-sm-8 col-lg-9 col-xl-10 pt-3 pl-4 ml-auto">
				<section class="row">
					<div class="col-sm-12">
						<section class="row">
							<div class="col-12">
								<div class="card mb-4">
									<div class="card-block">
										<h3 class="card-title">Delete Store</h3>
										<h6 class="card-subtitle mb-2 text-muted">Johor Premium Outlet</h6>
										<div class="divider" style="margin-top: 1rem;"></div>

										<?php
											include_once('db.php');	//this is how you call the library file

											$query = mysqli_query($con,"select * from store");	//complete the statement
										?>

										

	<!-- Print table heading -->
	

	<?php
	$sql = "SELECT LotNum,StoreName,PhoneNum FROM store";
   $result = mysqli_query($con,$sql);
   ?>

   <table align="center" border="1" cellspacing="0" cellpadding="3">
   <tr>
	<td align="center" width = "100"><strong>Lot Number</strong></td>
	<td align="center" width = "700"><strong>Store Name</strong></td>
	<td align="center" width = "300"><strong>Phone Number</strong></td>
	</tr>
	<?php
   while (
   $row = mysqli_fetch_array($result))
   {
   	?>
   	<tr>
   		<td><?php echo $row["LotNum"]; ?></td>
   		<td><?php echo $row["StoreName"]; ?></td>
   		<td><?php echo $row["PhoneNum"];?></td>
   	</tr>
   	<?php
   }
   
   
   mysqli_free_result($result);
   mysqli_close($con);
?>

<form id="myForm" action="DeleteStore.php" method="post">
<h6 class="card-subtitle mb-2 text-muted">Please insert Store Lot Number to delete store.</h6>
												<br>
												<div class="form-group row">

												<label class="col-md-3 col-form-label">Lot Number *</label>
												<div class="col-md-9">
													<input type="text" name="LotNum" id="LotNum" class="form-control">
													<div class="col-lg-6">
												</div>
												</div>

												<div class="col-lg-6">
												<button class="btn btn-primary" type="submit">Submit</button>
												<button class="btn btn-warning" type="reset">Cancel</button>
											</div>
											</div>
										</form>
										</div>
								</div>
							</div>
						</section>
					</div>
				</section>
			</main>
		</div>
	</div>

	<!-- Bootstrap core JavaScript
	================================================== -->
	<script type="text/javascript" src="cordova.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
	<!-- Placed at the end of the document so the pages load faster -->
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
	<script src="dist/js/bootstrap.min.js"></script>
	
    <script src="js/chart.min.js"></script>
    <script src="js/chart-data.js"></script>
    <script src="js/bootstrap-datepicker.js"></script>
    <script src="js/custom.js"></script>
    <script src="js/jquery-3.3.1.min.js"></script>
    
    <script type="text/javascript" src="Login/login.js"></script>
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>

	<!-- <script type="text/javascript">
		$(document).ready(function(){
			const url_string = window.location.href
		    var url = new URL(url_string);
		    var id = url.searchParams.get("id");
		    var category = url.searchParams.get("category");

			firebase.database().ref('stores/' + category + '/' + id).once('value').then(function(snapshot){
				$("#category").val(category);
				$("#id").val(id);
				$("#name").val(snapshot.val().name);
				$("#phone").val(snapshot.val().phone);
		  	//  console.log(snapshot.val())
		  });
		})  
	</script> -->
	</body>
</html>