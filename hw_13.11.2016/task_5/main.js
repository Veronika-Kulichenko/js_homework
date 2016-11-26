// Написать функцию, которая будет принимать строку (только буквы латинского алфавита) 
// любой длины и возвращать ее, но удалив из нее все гласные буквы английского алфавита. 


function deleteVowels(string){
	string = string.replace(/[aeiouy]/gi, "");       
	console.log(string);  
}

deleteVowels("This Is mY string");