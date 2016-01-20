var prompt = require('prompt');
var Letter = require('./letter.js');
var Word = require('./word.js');

//var wordChoices = ["heart and soul", "relax", "burning up", "manic monday", "into the groove", "invisible touch", "rebel yell"];
var wordBank = ["relax"];

// 
// Start the prompt 
// 
prompt.start();

// 
// Get two properties from the user: username and email 
// 
prompt.get(['guessLetter'], function(err, result) {
    // result is an object like this: { guessLetter: 'f' }
    //console.log(result);
    
    console.log('  The letter you guessed is: ' + result.guessLetter);

});