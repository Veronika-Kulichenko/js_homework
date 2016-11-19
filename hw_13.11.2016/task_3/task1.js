let counter = function() {
	let counter = Number(prompt("Init:"));

	return function() {
		let step = Number(prompt("Step:"));
		let repeat = Number(prompt("Repeat"));

		for(let i = 0; i < repeat; i++){
			counter+=step;
			console.log(counter);
		}
		return counter;
	}
}

let c = counter();
c();
c();
c();
let res = c();

alert(res);


function (){
	let counter = Number(prompt("Init:"));
	let step = Number(prompt("Step:"));
	let repeat = Number(prompt("Repeat"));
	
	for(let i = 0; i < repeat; i++){
		counter+=step;
		console.log(counter);
	}
	return counter;
}
