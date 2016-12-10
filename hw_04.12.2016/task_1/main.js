// Создать такой метод на прототипе конструктора Date, который будет принимать строку форматирования даты и возвращать строку с датой, отформатированную согласно условию.


// Для форматирования могут быть приняты следующие сокращения:
// YYYY - полный год
// YY - последние две цифры года
// MM - месяц, в цифровом представлении
// MMMM - месяц, в словарном представлении на любом, удобном вам, языке
// DD - день месяца
// HH - часы, в 24 часовом представлении
// mm - минуты
// ss - секунды


// Например,
// someDate.getCustomFormat(“YY-MMMM-DD HH:mm:ss”);
// // “16-september-13 21:00:00”


	Date.prototype.getCustomFormat = function(format){

	let currentDate = format;
	
	if(format.indexOf("YYYY") !== -1) {
		let fullYear = this.getFullYear();
		currentDate = currentDate.replace("YYYY", fullYear);
	} 
	if(format.indexOf("YY") !== -1) {
		let shortYear = this.getFullYear().toString(10).substr(2,2);
		currentDate = currentDate.replace("YY", shortYear);
	} 
	if(format.indexOf("MMMM") !== -1) {
		var formatter = new Intl.DateTimeFormat("en-US", {
			month: "long"});
		let monthString = formatter.format(this);
		currentDate = currentDate.replace("MMMM", monthString);
	} 
	if(format.indexOf("MM") !== -1) {
		let monthNumber = this.getMonth() + 1;
		currentDate = currentDate.replace("MM", monthNumber);
	} 
	if(format.indexOf("DD") !== -1) {
		let day = this.getDate() < 10 ? "0" + this.getDate() : this.getDate();
		currentDate = currentDate.replace("DD", day);
	} 
	if(format.indexOf("HH") !== -1) {
		let hours = this.getHours();
		currentDate = currentDate.replace("HH", hours);
	} 
	if(format.indexOf("mm") !== -1) {
		let minutes = this.getMinutes();
		currentDate = currentDate.replace("mm", minutes);
	} 
	if(format.indexOf("ss") !== -1) {
		let seconds = this.getSeconds();
		currentDate = currentDate.replace("ss", seconds);
	}
	return currentDate;
}

	