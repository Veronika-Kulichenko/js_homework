// На запрос к серверу о дате последнего изменения документа вы получаете ответ в строке, которая имеет формат:
// 2016/05/20-12:00:35+0300
// Задача - получить из этой строки объект класса Date и вывести в консоль эту дату в формате timestamp (1463727635000)


let date = "2016/05/20-12:00:35+0300",
	myDate = new Date();
myDate.setTime(Date.parse(date));