// Check user current state
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in
    var user = firebase.auth().currentUser;
    if(user != null){
    	var email = user.email;
    	document.getElementById("");
    }
  } else {
    // No user is signed in
    document.getElementById("login_div").style.display = "block";
  }
});

function register(){    
  window.location.href = "../Login/login.html";
};

function showAlert() {
  var retVal = confirm("Register Successfully!");
  if( retVal == true ) {
     window.location.href = "../Login/login.html";
     return true;
  } else {
     return false;
  }
}



