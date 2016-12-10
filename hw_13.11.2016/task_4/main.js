
let nums = [1, 2, 3, 5, 8, 13, 21, 34];
let str = ["this", "is", "a", "very", "long", "array", "which", "has", "absolutely", "no", "sense"];


// Сумма удвоенных значений каждого элемента

	let sumOfDuplicatedItemsOfArray = nums.reduce((sum, currentItem) => sum + currentItem * 2, 0);
	

// Узнать, есть ли в массиве четные числа

	let isEven = nums.some((item) => item % 2 === 0);


// Соединить элементы массива в одну строку, где слова разделены пробелами

	let allElementsOfArrayIntoString = str.join(" ");


// Получить новый массив, в котором к каждому элементу (строке) 
// будет добавлено число, равное количеству символов в этой строке. 

	let arrayOfElementsLength = str.map((item) => `${item} - ${item.length}`);


// Получить новый массив, в котором все элементы (строки) содержат 4 или более символов

	let wordsWithFourAndMoreSymbols = str.filter(item => item.length >= 4);


// Получить массив, который будет содержать только нечетные числа

	let oddNums = nums.filter((item) => item % 2);


// Сообщить, является ли сумма всех элементов больше 100

	let isSumOfAllElementsMoreThan100 = nums.reduce((sum, currentItem) => sum + currentItem) > 100;


// Получить новый массив, в котором все элементы будут отсортированы 
// по количеству символов в строке по возрастанию

	let sortedArr = str.sort((a, b) => {
	if(a.length < b.length) return -1;
	else if (a.length > b.length) return 1;
	else return 0;});


// Найти индекс самого длинного слова в массиве

	let maxIndex = str.reduce((resultIndex, currentElement, currentIndex, array) => array[resultIndex].length < currentElement.length ? currentIndex : resultIndex, 0);


// Получить строку, которая будет содержать 
// все элементы двух массивов перечисленных через запятую

	let joinedArraysSeparatedWithComma = nums.concat(str).join(',');