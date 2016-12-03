// Есть некий бар, в котором работает некоторое количество барменов и официантов.
// Нужно описать этот бар и его сотрудников, используя знания о прототипах и конструкторах, полученные на занятиях.

// О баре нам известно его название, а так же обновляемые свойства:
// массив барменов
// массив официантов
// количество напитков, каждого вида (массив объектов. не больше 5 элементов, для примера. Каждое поле - это напиток. Значение этого поля - количество единиц этого напитка. Единицы измерения можно сделать какими угодно - литры, килограммы, бутылки)
// количество собранных официантами чаевых
// список заказов (массив объектов. Каждый объект - это название заказанного напитка и его количество)

// У всех официантов и барменов есть общие свойства:
// имя
// возраст

// У официантов есть два метода
// взять заказ
// взять чаевые

// Метод “взять заказ” добавляет элемент в массив заказов бара. При этом, официант должен предупредить клиента, если в баре не достаточное количество напитка, чтобы выполнить заказ.
// Метод “взять чаевые” добавляет количество чаевых в общую сумму на баре.

// У всех барменов есть метод “выполнить заказы”. Передав  первым аргументом в этот метод название напитка, а вторым - число, можно использовать (уменьшить количество напитка) на указанное число.
// У каждого бармена есть свой “коронный” коктейль. Просто строковое свойство.

// У бара есть методы:
// пополнить склад
// разделить чаевые
// добавить сотрудника
// уволить сотрудника

// Метод “пополнить склад” принимает объект с названием напитка и его количеством. Если такой напиток существует в баре, то его количество обновляется. Если нет, то добавляется новый объект.

// Чаевые делятся на всех сотрудников бара.
// Метод “добавить сотрудника” принимает имя, возраст и должность сотрудника. Добавляет сотрудника в правильный массив в баре.

// Метод “уволить сотрудника” принимает имя и должность сотрудника. Убирает элемент выбранного сотрудника из правильного массива.



let Bar = {
	constructor: function(title){
		this.title = title;
		this.barmens = [];
		this.waiters = [];
		this.numberOfDrinks = [];
		this.tips = 0;
		this.orderList = [];
		return this;
	},

	warehouse: function(drink) {
		let drinkName = drink.drinkName;
		let arr = this.numberOfDrinks.filter(drink => drink.drinkName === drinkName);

		if (arr.length > 0){
			let drinkIndex = this.numberOfDrinks.indexOf(arr[0]);
			this.numberOfDrinks[drinkIndex].quantity += drink.quantity;
		} else  this.numberOfDrinks.push(drink);
	},

	splitTips: function() {
		let valueOfTips = this.tips / (this.waiters.length + this.barmens.length);

		this.waiters.forEach(waiter => {
			if(!("tip" in waiter)) waiter.tip = 0;
			waiter.tip += valueOfTips;
		});

		this.barmens.forEach(barmen => {
			if(!("tip" in barmen)) barmen.tip = 0;
			barmen.tip += valueOfTips;
		});

		this.tips = 0;
	},

	addEmployee: function(name, age, position, crownСocktail) {
		if(position === "barmen"){
			this.barmens.push(Object.create(Barmen).constructor(name, age, crownСocktail));
		} else this.waiters.push(Object.create(Waiter).constructor(name, age));
	},

	deleteEmployee: function(name, position){
		if(position === "barmen"){
			let arr = this.barmens.filter(employeeName => employeeName.name === name); 
			let employeeIndex = this.barmens.indexOf(arr[0]);
			this.barmens.splice(employeeIndex, 1);
		} else {
			let arr = this.waiters.filter(employeeName => employeeName.name === name); 
			let employeeIndex = this.waiters.indexOf(arr[0]);
			this.waiters.splice(employeeIndex, 1);
		}
	}
}

let bar = Object.create(Bar).constructor("Blue oyster");

let Drink = {
	constructor: function(drinkName, quantity) {
		this.drinkName = drinkName;
		this.quantity = quantity;
		return this;
	}
}

let Order = {
	constructor: function(drinkName, quantity) {
		this.drinkName = drinkName;
		this.quantity = quantity;
		return this;
	}
}

let Employee = {
	constructor: function(name, age) {
		this.name = name;
		this.age = age;
		return this;
	}
}

let Barmen = Object.create(Employee);
Barmen.constructor = function(name, age, crownСocktail) {
	Employee.constructor.apply(this, arguments);
	this.crownСocktail = crownСocktail;
	return this;
}

Barmen.completeOrder = function(drinkName, quantity) { 
	let arr = bar.numberOfDrinks.filter(drink => drink.drinkName === drinkName);
	let indexOfDrink = bar.numberOfDrinks.indexOf(arr[0]);
	bar.numberOfDrinks[indexOfDrink].quantity -= quantity;
	// delete drink from list of drinks if its quantity is 0
	if(bar.numberOfDrinks[indexOfDrink].quantity === 0){
		bar.numberOfDrinks.splice(indexOfDrink, 1);
	}
	// delete order from list of orders
	let order = bar.orderList.filter(order => order.drinkName === drinkName);
	let indexOfOreder = bar.orderList.indexOf(order[0]);
	bar.orderList.splice(indexOfOreder, 1);
}

let Waiter = Object.create(Employee);
Waiter.constructor = function(name, age){
	Employee.constructor.apply(this, arguments);
	return this;
}

Waiter.takeOrder = function(drinkName, quantity){
	let arr = bar.numberOfDrinks.filter(drink => drink.drinkName === drinkName);
	let indexOfDrink = bar.numberOfDrinks.indexOf(arr[0]);
	if(bar.numberOfDrinks[indexOfDrink].quantity < quantity) {console.log("Can't take your order");} 
	else {bar.orderList.push(Object.create(Order).constructor(drinkName, quantity));}
}

Waiter.takeTips = function(tips){
	bar.tips += tips;
}



let waiter1 = Object.create(Waiter).constructor("Maksim", 20);
let waiter2 = Object.create(Waiter).constructor("Margarita", 22);
let waiter3 = Object.create(Waiter).constructor("Edgar", 25);

bar.waiters.push(waiter1, waiter2, waiter3);

let barmen1 = Object.create(Barmen).constructor("Igor", 34, "1942 Martini");
let barmen2 = Object.create(Barmen).constructor("Vitia", 27, "Boston rum punch");

bar.barmens.push(barmen1, barmen2);

let drink1 = Object.create(Drink).constructor("Mixing up sunshine", 5);
let drink2 = Object.create(Drink).constructor("Brazilian sangria", 3);
let drink3 = Object.create(Drink).constructor("French 75", 4);
let drink4 = Object.create(Drink).constructor("Tornado", 7);
let drink5 = Object.create(Drink).constructor("1942 Martini", 5);

bar.numberOfDrinks.push(drink1, drink2, drink3, drink4, drink5);


// добавить сотрудников
bar.addEmployee("Elena", 23, "waiter");
bar.addEmployee("Egor", 32, "barmen", "Sweet night");

// официанты принимают заказы
waiter2.takeOrder("1942 Martini", 0.2);
waiter3.takeOrder("Tornado", 10);
waiter2.takeOrder("1942 Martini", 5);

// бармен выполняет заказ
barmen1.completeOrder("1942 Martini", 0.2);

// пополнить склад
bar.warehouse(Object.create(Drink).constructor("1942 Martini", 7));
bar.warehouse(Object.create(Drink).constructor("Vodka", 3));

// официанты принимают чаевые
waiter2.takeTips(100);
waiter3.takeTips(200);

// уволить сотрудников, чтобы не делить с ними чаевые
bar.deleteEmployee("Maksim", "waiter");
bar.deleteEmployee("Vitia", "barmen");

// разделить чаевые
bar.splitTips();









