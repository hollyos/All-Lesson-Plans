var prompt = require('prompt');
var Letter = require('./letter.js');
var Word = require('./word.js');
//var game = require('./game.js');

prompt.start();

game = {
	//this.wordChoices = ["heart and soul", "relax", "burning up", "manic monday", "into the groove", "invisible touch", "rebel yell"];
	wordBank : ["relax"],
	wordsWon : 0,
	guessesRemaining : 3, //per word
	currentWrd : null, 
	startGame : function (wrd){
		//make sure the user has 3 guesses
		resetGuessesRemaining();

		this.currentWrd = new Word(wordBank[0]);

		while( guessRemaining > 0){
			prompt.get(['guessLetter'], function(err, result) {
			    // result is an object like this: { guessLetter: 'f' }
			    //console.log(result);
			    
			    console.log('  The letter you guessed is: ' + result.guessLetter);
			    this.guessRemaining--;
			    console.log(this.guessRemaining);
			});
		}
	},
	resetGuessesRemaining : function(){
		this.guessRemaining = 10;
	}


};

game.startGame();

// 
// Start the prompt 
// 


// 
// Get two properties from the user: username and email 
// 
// prompt.get(['guessLetter'], function(err, result) {
//     // result is an object like this: { guessLetter: 'f' }
//     //console.log(result);
    
//     console.log('  The letter you guessed is: ' + result.guessLetter);

// });