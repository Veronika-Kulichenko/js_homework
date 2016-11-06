function start() {
	var str = "Hi, player 1!";
	console.log(str);
	var resultOfPlayer_1 = game(str);

	str = "Hi, player 2!";
	console.log(str);
	var resultOfPlayer_2 = game(str);
	chooseWinner(resultOfPlayer_1, resultOfPlayer_2);
}

function game(str) {
	var random = getRandomInt(1, 11);
	var score = random;

	while(true) {
		var answer = prompt(str + "\n" +
		"Your new number is " + random + ". Your score " + score + ".\n" +
		"Would you like to generate next random number?\n" +
		"Press Y to accept or N to refuse.","");
		if(answer === "N" || answer === "n"){
			break;
		} else if(answer === "Y" || answer === "y"){
			random = getRandomInt(1, 11);
			score += random;
		} else if(answer === "exit"){
			break;
		} else alert("Press Y or N");
	}
	return score;
} 

function getRandomInt(min, max) {
	var random = Math.floor(Math.random() * (max - min + 1) + min);
	console.log(random);
	return random;
}

function chooseWinner(resultOfPlayer_1, resultOfPlayer_2) {
	if(resultOfPlayer_1>21 && resultOfPlayer_2>21){ 
		alert("Nobody has won :(");
	} else if(resultOfPlayer_1>21 || resultOfPlayer_2>21){
		resultOfPlayer_1>21 ? alert("Player 2 has won!") : alert("Player 1 has won!");
	}else if(resultOfPlayer_1 > resultOfPlayer_2 ){
		alert("Player 1 has won!");
	} else if (resultOfPlayer_1 < resultOfPlayer_2){
		alert("Player 2 has won!");
	} else if (resultOfPlayer_1 === resultOfPlayer_2 ){
		alert("Draw!");
	}

}