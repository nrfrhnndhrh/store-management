// Check user current state
firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		// User is signed in
		var user = firebase.auth().currentUser;
		if (user != null) {
			var email = user.email;
			document.getElementById("");
		}
	} else {
		// No user is signed in
		document.getElementById("login_div").style.display = "block";
	}
});

// Authentication
function login() {
	var userEmail = document.getElementById("email").value;
	var userPassword = document.getElementById("password").value;

	if (firebase.auth().currentUser) {
		// [START signout]
		firebase.auth().signOut();
		// [END signout]
	} else {
		firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).then(function (firebaseUser) {
			// Success 
			window.location.href = "../index.html";
		})
			.catch(function (error) {
				// Error
				var errorCode = error.code;
				var errorMessage = error.message;
				alert("Error: " + errorMessage);
			})
	}
};

function login2() {
	window.location.href = "../index.html";
}

// Logout
function logout() {
	window.location.href = "Login/login.html";
	// 	firebase.auth().signOut().then(function(){
	// 		window.location.href = "login.html";
	//   	// Sign-out successful.
	// 	}).catch(function(error) {
	// 	  // An error happened.
	// 	});
}
