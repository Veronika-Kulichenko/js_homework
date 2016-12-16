// Условный запрос на сервер для получения информации о состоянии рынка ценных бумаг возвращает на строку типа:


// apple:2016/5/27__bid_203.38-ask_203.43|2016/5/28__bid_203.35-ask_203.42|2016/5/28__bid_203.39-ask_203.45


// После разбора строки с помощью регулярного выражения нужно получить объект вида:


// {
// 	stockName: apple,
// 	rates: [
// 		{
// 			date: “2016/5/27”,
// 			bid: 203.38,
// 			ask: 203.43
// },
// {
// 			date: “2016/5/28”,
// 			bid: 203.35,
// 			ask: 203.42
// },
// {
// 			date: “2016/5/29”,
// 			bid: 203.39,
// 			ask: 203.45
// }
// ]
// }


let str = "apple:2016/5/27__bid_203.38-ask_203.43|2016/5/28__bid_203.35-ask_203.42|2016/5/28__bid_203.39-ask_203.45";

function handleRequest(str){

	let company = str.match(/\w+(?=:)/g)[0],
		ratesArr = str.match(/\d{4}\/\d{1}\/\d{2}__bid_\d{3}.\d{2}-ask_\d{3}.\d{2}\|?/g);

	let information = {
		stockName : company,
		rates: []
	};

	information.rates = ratesArr.map(rate => {
		let date = rate.match(/\d{4}\/\d{1}\/\d{2}/g)[0],
			bid = Number(rate.match(/\d{3}.\d{2}(?=-ask)/g)[0]),
			ask = Number(rate.match(/\d{3}.\d{2}(?!-ask)/g)[0]);
		return {date, bid, ask};
	});
	return information;
}
handleRequest(str);

