var prompt = require('prompt');
var Word = require('./word.js');
//var game = require('./game.js');

prompt.start();

game = {
	//this.wordChoices = ["heart and soul", "relax", "burning up", "manic monday", "into the groove", "invisible touch", "rebel yell"];
	wordBank : ["relax"],
	wordsWon : 0,
	guessesRemaining : 5, //per word
	currentWrd : null, //the word object
	startGame : function (wrd){
		//make sure the user has 5 guesses
		this.resetGuessesRemaining();

		this.currentWrd = new Word(this.wordBank[0]);

		this.currentWrd.getLets(); //populate currentWrd (made from Word constructor function) object with letters

		this.keepPromptingUser();

	}, 
	resetGuessesRemaining : function(){
		this.guessRemaining = 5;
	},
	keepPromptingUser : function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result) {
		    // result is an object like this: { guessLetter: 'f' }
		    //console.log(result);
		    
		    console.log('  The letter you guessed is: ' + result.guessLetter);

		    //this checks if the letter was found and if it is then it sets that specific letter in the word to be found
		    self.currentWrd.checkIfLetterFound(result.guessLetter);

		    self.guessesRemaining--;
		    console.log(self.guessesRemaining);

		    console.log('before');
		    console.log(self.currentWrd.wordRender());
		  	console.log('after');

		    if ((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
		    	self.keepPromptingUser();
		    }else{
		    	console.log(self.currentWrd.wordRender());
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