
let nums = [1, 2, 3, 5, 8, 13, 21, 34];
let str = ["this", "is", "a", "very", "long", "array", "which", "has", "absolutely", "no", "sense"];

// Сумма удвоенных значений каждого элемента

function sumOfNums(nums){
	let sum = 0;
	for(let i = 0; i < nums.length; i++){
		let doubling = nums[i]*2;
		sum += doubling;
	}
	console.log(sum);
	return sum;
}

// Узнать, есть ли в массиве четные числа

function isEvenTrue(nums){
	let evelNums = [];
	for(let i = 0; i < nums.length; i++){
		if(nums[i]%2===0){
			console.log(`${nums[i]} четное`);
			evelNums.push[nums[i]];
		} else{console.log(`${nums[i]} нечетное`);} 
	} console.log(`Все четные числа массива: ` + evelNums.join(' '));
}

// Соединить элементы массива с одну строку, где слова разделены пробелами

function allElementsOfArrayIntoString(str){
	str.join(' ');
	console.log(str);
	return str;
}

// Получить новый массив, в котором к каждому элементу (строке) 
// будет добавлено число, равное количеству символов в этой строке. 

function addNumberOfSymbolsInWord(str){
	let newArr = [];
	for(let i = 0; i < str.length; i++){
		newArr.push(str[i] + " - " + str[i].length);
	}
	console.log(newArr);
	return newArr;
}

// Получить новый массив, в котором все элементы (строки) содержат 4 или более символов

function getWordsWithFourAndMoreSymbols(str){
	let wordsWithFourAndMoreSymbols = [];
	for(let i = 0; i < str.length; i++){
		if(str[i].length >= 4){
		wordsWithFourAndMoreSymbols.push(str[i]);
		} 
	} console.log(wordsWithFourAndMoreSymbols);
}

// Получить массив, который будет содержать только нечетные числа

function getAllOddNumbers(nums){
	let oddNums = [];
	for(let i = 0; i < nums.length; i++){
		if(nums[i]%2 !== 0){
			oddNums.push(nums[i]);
		}
	} console.log(oddNums);
	return oddNums;
}

// Сообщить, является ли сумма всех элементов больше 100

function isSumOfAllElementsMoreThanOneHundred(nums){
let sum = 0;
for(let i = 0; i < str.length; i++){
sum += nums[i];
}
if (sum > 100){
	console.log("Sum of array elements is greater than 100");
} else if (sum === 100){
console.log("Sum of array elements  is equal to 100");
} else {console.log("Sum of array elements is less than 100")}
}

// Получить новый массив, в котором все элементы будут отсортированы 
// по количеству символов в строке по возрастанию

function getSortedArray(str){
for(let i = 0; i < str.length; i++){
if (str[i].length > str[i+1].length){
let temp = str[i];
str[i] = str[i+1];
str[i+1] = temp;
}
}
console.log(str);
}

https://learn.javascript.ru/array-iteration



