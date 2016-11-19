// rest parameter

function typeOfParamsToString(...params){
	let typeOfArraysElement = [];
	params.forEach(function(item, i , params){
		typeOfArraysElement.push(typeof params[i]);
	})
	return typeOfArraysElement.join(', ')
}

console.log(typeOfParamsToString(2, "String", true));

// arguments

function typeOfArgumentsToString() {
	let result = "";
	for(let i = 0; i < arguments.length; i++) {
		result += typeof arguments[i] + ", ";
	}
	return result.substring(0, result.length - 2);
}


console.log(typeOfArgumentsToString("a", 1, true, "end"));
