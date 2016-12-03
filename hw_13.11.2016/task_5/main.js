// Написать функцию, которая будет принимать строку (только буквы латинского алфавита) 
// любой длины и возвращать ее, но удалив из нее все гласные буквы английского алфавита. 


function deleteVowels(string){
	string = string.replace(/[aeiouy]/gi, "");       
	console.log(string);  
}


function removeVowels(string){
   	let newString = string.toLowerCase();
   	let arr = [];
   	for(let i = 0 ; i < newString.length; i++){
   		arr.push(newString.charAt(i));
   	}
   	console.log(arr);
   	for(let i = arr.length - 1; i  >= 0; i--){
   		if(arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u" || arr[i] === "y") {
   			arr.splice(i, 1);
   		}
   	}
   		console.log(arr);
   		let stringWithoutVowels = arr.join("");
   		console.log(stringWithoutVowels);

   }

   removeVowels("This Is mY fantastic long string for you.");
