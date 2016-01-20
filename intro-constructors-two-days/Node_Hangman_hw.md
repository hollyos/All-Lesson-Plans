#Week of 11 homework for Node.js

### Introduction

* You will make Hangman Game.

* Building it with Constructor functions.

* It will be a command line node app that takes in prompted text an input.

* see demonstration of how it works *

* We will build this game step by setup one piece at a time.

## Part 1: Making the letter

* create a file
```
letter.js
```

* Start by creating a constructor function 
	* named `Letter`
	* it should take an input `let`
	* create a property called `charac` which will store the input `let`
	* create a property called `appear` set to `false`
	* create a function inside of the `Letter` constructor called `letterRender`
	when the function is called, it will check the value of `charac`
	if `false` return string `"_"` else it will return `charac`

export the Letter constuctor function with `module.exports`

## Part 2: Making the Word

* create a file
```
word.js
```

* Start by importing the `letter.js` file by using require, set to a variable called `Letter`
* Create a constructor function 
	* named `Word`
	* it should take an input `wrd`
	* create a property called `word` which will store the input `wrd`
	* create a property called `lets` which is set to an empty array
	* create a property called `found` which is set to `false`
* create a function inside of `Word` constructor called `getLets`
	*this function will create letter objects that will be put into the `lets` array
	*when the function is called, it will run a loop that iterate over each of the letter in the `word` property
	*everytime the loop iterates, it creates a new Letter object with the input of the current letter
	*After this function runs `lets` will contain an Letter object for each of the letter in `word`


export the Word constuctor function with `module.exports`


























# BONUS

* 

# Copyright
Rutgers Coding Boot Camp (C) 2015. All Rights Reserved.