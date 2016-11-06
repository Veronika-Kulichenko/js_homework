var str = prompt("Enter your email");
console.log(str);
validateEmail1(str);	

function validateEmail1(str){
	if(str.indexOf("@") !== -1){
		var firstPart = str.split("@")[0];
		var secondPart = str.split("@")[1];
		var domain = secondPart.substring(0, secondPart.indexOf("."));
		var zone = secondPart.substring(secondPart.indexOf("."));
		if (firstPart.length < 5) {
			alert("Local-part in your email shoul contain at least 5 symbols");
			return false;
		} else if (domain.length < 2 || domain.length >= 10){
			alert("Domain in your email should contain at least 1 and no more than 9 symbols");
			return false;
		} else if (zone.length <= 2 || zone.length >=5){
			alert("Zone in your email should contain at least 2 and no more than 4 symbols");
			return false;
		} 
		return true;
	} else if(str == ""){
		alert("Enter your email");
		return false;
	} else {
		alert("Email should contain @");
		return false;
	}
}