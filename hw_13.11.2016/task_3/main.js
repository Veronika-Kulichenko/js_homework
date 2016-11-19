
let nums = [1, 2, 3, 5, 8, 13, 21, 34];
let str = ["this", "is", "a", "very", "long", "array", "which", "has", "absolutely", "no", "sense"];


sumOfDuplicatedItemsOfArray(nums);
isEvenTrue(nums);
allElementsOfArrayIntoString(str);
addNumberOfSymbolsInWord(str);
getWordsWithFourAndMoreSymbols(str);
getAllOddNumbers(nums);
isSumOfAllElementsMoreThanOneHundred(nums);
getSortedArray(str);
getMaxElement(str);
getElementsOfTwoArrays(nums, str);


// Сумма удвоенных значений каждого элемента

function sumOfDuplicatedItemsOfArray(nums){
	let numsLength = nums.length;
	let sum = 0;
	for(let i = 0; i < numsLength; i++){
		let doubling = nums[i]*2;
		sum += doubling;
	}
	console.log("Сумма удвоенных значений каждого элемента: " + sum);
	return sum;
}


// Узнать, есть ли в массиве четные числа

function isEvenTrue(nums){
	let numsLength = nums.length;
	let evelNums = [];
	for(let i = 0; i < numsLength; i++){
		if(nums[i]%2===0){
			evelNums.push(nums[i]);
		}
	} 
	console.log(`В массиве есть четные числа. Все четные числа массива: ` + evelNums.join(' '));
}


// Соединить элементы массива в одну строку, где слова разделены пробелами

function allElementsOfArrayIntoString(str){
	let newArray = str.join(" ");
	console.log("Элементы массива в одну строку через пробел: " + newArray);
	return newArray;
}


// Получить новый массив, в котором к каждому элементу (строке) 
// будет добавлено число, равное количеству символов в этой строке. 

function addNumberOfSymbolsInWord(str){
	let newArr = [];
	let strLength = str.length;
	for(let i = 0; i < str.length; i++){
		newArr.push(str[i] + " - " + str[i].length);
	}
	console.log(newArr);
	return newArr;
}


// Получить новый массив, в котором все элементы (строки) содержат 4 или более символов

function getWordsWithFourAndMoreSymbols(str){
	let wordsWithFourAndMoreSymbols = [];
	let strLength = str.length;
	for(let i = 0; i < strLength; i++){
		if(str[i].length >= 4){
			wordsWithFourAndMoreSymbols.push(str[i]);
		} 
	} console.log("Элементы с 4 или более символами: " + wordsWithFourAndMoreSymbols);
}


// Получить массив, который будет содержать только нечетные числа

function getAllOddNumbers(nums){
	let numsLength = nums.length;
	let oddNums = [];
	for(let i = 0; i < numsLength; i++){
		if(nums[i]%2 !== 0){
			oddNums.push(nums[i]);
		}
	} console.log("Только нечетныечисла массива: " + oddNums);
	return oddNums;
}


// Сообщить, является ли сумма всех элементов больше 100

function isSumOfAllElementsMoreThanOneHundred(nums){
	let numsLength = nums.length;
	let sum = 0;
	for(let i = 0; i < numsLength; i++){
		sum += nums[i];
	}
	if (sum > 100){
		console.log("Sum of array elements is greater than 100");
	} else if (sum === 100){
		console.log("Sum of array elements  is equal to 100");
	} else console.log("Sum of array elements is less than 100");
}


// Получить новый массив, в котором все элементы будут отсортированы 
// по количеству символов в строке по возрастанию

function getSortedArray(str){
	let sortedArray = str.slice();
	let sortedArrayLength = sortedArray.length;
	for(let i = 0; i < sortedArrayLength; i++){
		for(let j = 0; j < sortedArrayLength-1-i; j++){
			if (sortedArray[j].length > sortedArray[j+1].length){
				let temp = sortedArray[j];
				sortedArray[j] = sortedArray[j+1];
				sortedArray[j+1] = temp;
			}
		}
	}
	console.log(sortedArray);
}


// Найти индекс самого длинного слова в массиве

function getMaxElement(str){
	let maxIndex = 0;
	let strLength = str.length;
	for (i = 1; i < strLength; i++) {
		if (str[i].length > str[maxIndex].length) maxIndex = i;
	}
	console.log(maxIndex);
	return maxIndex;
}


// Получить строку, которая будет содержать 
// все элементы двух массивов перечисленных через запятую

function getElementsOfTwoArrays(nums, str){
	let combinedArray = nums.concat(str).join(',');
	console.log(combinedArray);  
	return combinedArray;
}


// https://learn.javascript.ru/array-iteration



