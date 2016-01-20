exports.Word = function(wrd){
	this.lets = []; //letter objects
	this.found = false;

	this.getLets = function(wrd) {
		for(var i = 0; i < wrd.length; i++) {
			this.lets.push(new Letter(wrd[i]));
		}
	};
	
	//found the current word
	this.foundIt = function() {
		this.found = this.lets.every(function(curLet) {
			return curLet.appear;
		});
	};

	this.checkIfLetterFound = function(guessLetter) {
		for(var i = 0; i < this.lets.length; i++) {
			if (lets[i].charac == guessLetter){
				lets[i].appear = true;
			}
		}

	};

	this.render = function() {
		return this.lets.map(function(let) {
			return let.render();
		}).join("");
	};
}