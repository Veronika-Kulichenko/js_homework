// Исходный объект:
let obj = {
	num: 1.24,
	str: 'not very long string',
	f() {
		return this.str.split(' ')
	},
	arr: ['some', 'array', {someProp: 'value'}],
	prop: { key: 1 },
	empty: null,
	last: 0
};

function getNewObject(obj){
	let newObject = Object.create(obj);
	
	let numbersOfProps = 0;
	let propTypes = [];
	let propNames = [];
	for (key in obj) {
		propTypes.push(typeof obj[key]);
		propNames.push(key);
		numbersOfProps++;
	}
	
	newObject["количество собственных свойств"] = numbersOfProps;
	newObject.propTypes = propTypes;
	newObject.propNames = propNames;

	console.log(newObject);

	for (key in obj) {
		if(typeof obj[key] === "number") {
			obj[key] = obj[key].toFixed(2);
		} else if(typeof obj[key] === "string") {
			obj[key] = obj[key].toUpperCase();
		}
	}

	Object.preventExtensions(obj);
	console.log(obj);
	console.log(Object.isExtensible(obj));
}

getNewObject(obj);

// Написать функцию, передав в которую исходный объект, мы получим новый объект вида:

// {
//   “количество собственных свойств”: 7,
//   propTypes: [“number”, “string”, “function”, …, “number”],
//   propNames: [“num”, “str”, …, “last”]
// }

// Исходный объект после отрабатывания функции изменяется:
// все числовые значения свойств первого уровня (*) преобразуются в числа с плавающей точкой с двумя знаками после точки;
// все строковые значения первого уровня преобразуются к верхнему регистру;
// объект становится не расширяемым (нельзя добавлять новые свойства).

// Исходный объект является примером. Функция может принимать любой объект и соответственно менять  возвращаемое значение.
