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
	return format.replace("YYYY", this.getFullYear())
	.replace("YY", this.getFullYear().toString(10).substr(2,2))
	.replace("MMMM", (new Intl.DateTimeFormat("en-US", {month: "long"}).format(this)))
	.replace("MM", this.getMonth() + 1)
	.replace("DD", this.getDate() < 10 ? "0" + this.getDate() : this.getDate())
	.replace("HH", this.getHours())
	.replace("mm", this.getMinutes())
	.replace("ss", this.getSeconds());;
}
 
	