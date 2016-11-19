let initialValue = Number(prompt("Enter the number, which initializes the counter"));
console.log(initialValue);
let step = Number(prompt("Enter the step"));
console.log(step);
let repeat = Number(prompt("Enter the number of the repeat calls"));
console.log(repeat);

let result = getFinalValueOfCounter(initialValue, step, repeat);
alert("The final value of the repeat is " + result);

function getFinalValueOfCounter (initialValue, step, repeat){
	let result = initialValue;
	for(let i = 0; i < repeat; i++){
		result += step;
		console.log(result);
	}
	console.log(result);
	return result;
}

