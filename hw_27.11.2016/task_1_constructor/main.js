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



CreateBar = function(title){
	this.title = title;
	this.barmens = [];
	this.waiters = [];
	this.numberOfDrinks = [];
	this.tips = 0;
	this.orderList = [];
}

let bar = new CreateBar("Blue oyster");

CreateBar.prototype.warehouse = function(drink) {
	let drinkName = drink.drinkName;
	let arr = this.numberOfDrinks.filter(drink => drink.drinkName === drinkName);

	if (arr.length > 0){
		let drinkIndex = this.numberOfDrinks.indexOf(arr[0]);
		this.numberOfDrinks[drinkIndex].quantity += drink.quantity;
	} else  this.numberOfDrinks.push(drink)
}

CreateBar.prototype.splitTips = function() {
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
}

CreateBar.prototype.addEmployee = function(name, age, position, crownСocktail) {
	if(position === "barmen"){
		this.barmens.push(new Barmen(name, age, crownСocktail));
	} else this.waiters.push(new Waiter(name, age));
}

CreateBar.prototype.deleteEmployee = function(name, position){
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


Drink = function(drinkName, quantity) {
	this.drinkName = drinkName;
	this.quantity = quantity;
}

Order = function(drinkName, quantity) {
	this.drinkName = drinkName;
	this.quantity = quantity;
}

Employee = function(name, age) {
	this.name = name;
	this.age = age;
}

Barmen = function(name, age, crownСocktail) {
	Employee.apply(this, arguments);
	this.crownСocktail = crownСocktail;
}

Barmen.prototype.completeOrder = function(drinkName, quantity) { 
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

Waiter = function(name, age){
	Employee.apply(this, arguments);
}

Waiter.prototype.takeOrder = function(drinkName, quantity){
	let arr = bar.numberOfDrinks.filter(drink => drink.drinkName === drinkName);
	let indexOfDrink = bar.numberOfDrinks.indexOf(arr[0]);
	if(bar.numberOfDrinks[indexOfDrink].quantity < quantity) {console.log("Can't take your order");} 
	else {bar.orderList.push(new Order(drinkName, quantity));}
}

Waiter.prototype.takeTips = function(tips){
	bar.tips += tips;
}



let waiter1 = new Waiter("Maksim", 20);
let waiter2 = new Waiter("Margarita", 22);
let waiter3 = new Waiter("Edgar", 25);

bar.waiters.push(waiter1, waiter2, waiter3);

let barmen1 = new Barmen("Igor", 34, "1942 Martini");
let barmen2 = new Barmen("Vitia", 27, "Boston rum punch");

bar.barmens.push(barmen1, barmen2);

let drink1 = new Drink("Mixing up sunshine", 5);
let drink2 = new Drink("Brazilian sangria", 3);
let drink3 = new Drink("French 75", 4);
let drink4 = new Drink("Tornado", 7);
let drink5 = new Drink("1942 Martini", 5);

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
bar.warehouse(new Drink("1942 Martini", 7));
bar.warehouse(new Drink("Vodka", 3));

// официанты принимают чаевые
waiter2.takeTips(100);
waiter3.takeTips(200);

// уволить сотрудников, чтобы не делить с ними чаевые
bar.deleteEmployee("Maksim", "waiter");
bar.deleteEmployee("Vitia", "barmen");

// разделить чаевые
bar.splitTips();









