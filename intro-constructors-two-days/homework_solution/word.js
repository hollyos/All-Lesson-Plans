var Letter = require('./letter.js');

var Word = function(wrd){
	this.word = wrd;
	this.lets = []; //letter objects
	this.found = false;

	this.getLets = function() {
		for(var i = 0; i < this.word.length; i++) {
			this.lets.push(new Letter(this.word[i]));
		}
	};
	
	//found the current word
	this.foundIt = function() {
		this.found = this.lets.every(function(curLet) {
			return curLet.appear;
		});
	};

	this.checkIfLetterFound = function(guessLetter) {
		var whatToReturn = null;

		for(var i = 0; i < this.lets.length; i++) {
			if (this.lets[i].charac == guessLetter){
				this.lets[i].appear = true;
				return true;
			}else{
				whatToReturn = false;
			}
		}

		return whatToReturn;
	};

	this.wordRender = function() {
		var str = '';

		for(var i=0; i < this.lets.length; i++){
			str += this.lets[i].letterRender();
		}

		return str;
	};
}

module.exports = Word;