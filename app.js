submitForm.onclick = function(){
	var submitForm = document.getElementById("submitForm");
		console.log("I was clicked");
		var usernameElement = document.getElementById('username');
		var username = usernameElement.value;
		var passwordElement = document.getElementById('password1');
		var password = passwordElement.value;
		var passwordElement2 = document.getElementById('password2');
		var password2 = passwordElement2.value;
		if(username.length < 5 && password.length < 6){
			var msg = document.getElementById('msg').innerHTML="You need at least 5 characters for the username and 6 characters for the password";
		} else if (username.length < 5){
			var msg = document.getElementById('msg').innerHTML="Your username needs to be at least 5 characters";
		} else if (password.length < 6){
			var msg = document.getElementById('msg').innerHTML="Your password needs to be at least 6 characters";
		} else if(password.value === password2.value){
			alert("password1: " + password.value + "     password2: " + password2.value)
			var msg = document.getElementById('msg').innerHTML="Your passwords do not match."
		} else{
			alert("Welcome " + username + "!");
		}
}

// submitForm.onclick = function(){
// 	var submitForm = document.getElementById("submitForm");
// 		console.log("I was clicked");
// 		var passwordElement = document.getElementById('password');
// 		var password = passwordElement.value;
// 		if(password.length < 6){
// 			var msg = document.getElementById('msg').innerHTML="You need at least 6 characters for the password";
// 		}
// }