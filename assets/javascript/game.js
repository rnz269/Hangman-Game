var options = ["rizzo", "bryant", "russell", "lester", "arrieta", "hendricks"];

var computerSelection = options[Math.floor(Math.random() * options.length)];


console.log(computerSelection);
var length = computerSelection.length;
console.log(length);


var gameState = {
	gameWord:computerSelection,
	currentGuessedLetters: "",
	currentGuessedWord:"",
	numberofGuesses:15,
	wins:0
};

if(computerSelection.length===2){
var div = document.getElementById('current').innerHTML = "- -";
gameState.currentGuessedWord = "--";
}

else if(computerSelection.length===3){
var div = document.getElementById('current').innerHTML = "---";
gameState.currentGuessedWord = "---";
}

else if(computerSelection.length===4){
var div = document.getElementById('current').innerHTML = "----";
gameState.currentGuessedWord = "----";
}

else if(computerSelection.length===5){
var div = document.getElementById('current').innerHTML = "-----";
gameState.currentGuessedWord = "-----";
}

else if(computerSelection.length===6){
var div = document.getElementById('current').innerHTML = "------";
gameState.currentGuessedWord = "------";
}

else if(computerSelection.length===7){
var div = document.getElementById('current').innerHTML = "-------";
gameState.currentGuessedWord = "-------";
}

else if(computerSelection.length===8){
var div = document.getElementById('current').innerHTML = "--------";
gameState.currentGuessedWord = "--------";
}

else if(computerSelection.length===9){
var div = document.getElementById('current').innerHTML = "---------";
gameState.currentGuessedWord = "---------";
}

else if(computerSelection.length===10){
var div = document.getElementById('current').innerHTML = "----------";
gameState.currentGuessedWord = "----------";
}




String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
}

document.onkeyup = function(event) {
	// being lazy in below line, need to use the keycode thing
	var guessedLetter = String.fromCharCode(event.keyCode).toLowerCase();
	var hasBeenGuessed = false;
	var correctLetterGuess = false;

	for (var counter = 0; counter < gameState.currentGuessedLetters.length; counter++) {
		if (guessedLetter === gameState.currentGuessedLetters.charAt(counter)) {
			hasBeenGuessed = true;
			break;
			}
		}

		if (hasBeenGuessed === false) {
			console.log(gameState.currentGuessedLetters = gameState.currentGuessedLetters + " " + guessedLetter);
					if (gameState.numberofGuesses>0) {
						gameState.numberofGuesses--};

			for (var counter = 0; counter < gameState.gameWord.length; counter++) {
				if (guessedLetter === gameState.gameWord.charAt(counter)) {
					console.log(correctLetterGuess = true);
					gameState.currentGuessedWord = gameState.currentGuessedWord.replaceAt(counter, guessedLetter);
				}
			}
			if (gameState.currentGuessedWord===gameState.gameWord) {
				gameState.wins ++;
				gameState.currentGuessedLetters = "";
				gameState.currentGuessedWord = "";
				gameState.numberofGuesses = 15;
				computerSelection = options[Math.floor(Math.random() * options.length)];
				gameState.gameWord = computerSelection;
			}
			renderScoreboard();
			}
}

	


function renderScoreboard() {
	var numberOfGuessesScore = document.getElementById("numberOfGuessesScore").innerHTML = "Number of Guesses Remaining: " + gameState.numberofGuesses;
	var currentGuessedLettersScore = document.getElementById("currentGuessedLettersScore").innerHTML = "Letters Already Guessed: " + gameState.currentGuessedLetters;
	var current = document.getElementById("current").innerHTML = gameState.currentGuessedWord;
	var hwins = document.getElementById("hwins").innerHTML = "Wins: " + gameState.wins;
}
