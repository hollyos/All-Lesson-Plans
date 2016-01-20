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
		this.resetGuessesRemaining();

		this.currentWrd = new Word(this.wordBank[0]);

		this.keepPromptingUser();

	}, 
	resetGuessesRemaining : function(){
		this.guessRemaining = 10;
	},
	keepPromptingUser : function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result) {
		    // result is an object like this: { guessLetter: 'f' }
		    //console.log(result);
		    
		    console.log('  The letter you guessed is: ' + result.guessLetter);
		    self.guessesRemaining--;
		    console.log(self.guessesRemaining);

		    if (self.guessesRemaining > 0){
		    	self.keepPromptingUser();
		    }
		});
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