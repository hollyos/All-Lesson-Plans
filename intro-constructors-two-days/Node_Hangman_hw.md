#Week of 11 homework for Node.js

### Introduction

* You will be creating a Hangman Game.

* Building it with Constructor functions.

* It will be a command line node app that will take in prompted text as an input.

* We will build this game step by setup one piece at a time.

## Part 0: Setup

* Install the npm package prompt

```
npm install prompt --save
```

## Part 1: Making the letter Constructor 

* create a file called
```
letter.js
```

* Start by creating a constructor function named `Letter`
	* it should take an input `let`
	* create a property called `charac` which will store the input `let`
	* create a property called `appear` set it to `false`
	* create a function inside of the `Letter` constructor called `letterRender`
	* when the function `letterRender` is called
		- it will check the value of `charac`
		- if `false` return a string `"_"`, else it will return the value `charac`

export the Letter constuctor function with `module.exports`

## Part 2: Making the Word Constructor

* create a file called
```
word.js
```

* Start by importing the `letter.js` file by using require, set it to a variable called `Letter`

* Create a constructor function named `Word`
	* it should take an input `wrd`
	* create a property called `word` which will store the input `wrd`
	* create a property called `lets` which is set to an empty array
	* create a property called `found` which is set to `false`

* create a function inside of `Word` constructor called `getLets` 
	* this function will create letter objects that will be put into the `lets` array
	* when the `getLets` function is called
		- it will run a loop that iterate over each of the letter in the `word` property
		- everytime the loop iterates, it creates a new Letter object with the input of the current letter
		- Hint: After this function runs the property `lets` will contain an Letter object for each of the letter in `word`

* create a function inside of `Word` constructor called `checkIfLetterFound`
	* this function will take an input `guessLetter`
	* when the `checkIfLetterFound` function is called
		- this function create an varaible called `whatToReturn` and set it to the number 0
		- it will run a loop that iterate over each object in the `lets` array
		- check the current object that's being iterated over, and if the `charac` property in that object is equal to `guessLetter`
		- if so set the `appear` property of that object to `true`
		- and add 1 to `checkIfLetterFound`
	* return `checkIfLetterFound`

* create a function inside of `Word` constuctor called `didWeFindTheWord`
	* when the `didWeFindTheWord` function is called
		- call the `.every` method on the `lets` array
		- Hint: look up `.every` to see how it works
		- `.every` method takes in an anonymous function as input, that function will take an input `curLet`
		- sets `found` to `true` if all letter objects have the `true` value in their `appear` property
		- return `found`

* create a function inside of `Word` constuctor called `wordRender`
	* when the `wordRender` function is called
		- create a varaible called `str` set it to `""`
		- it will run a loop that iterate over each object in `let` array
		- everytime the loop iterates, calling the `letterRender` on that object and string concatenate it to `str`
		- return `str`

export the Word constuctor function with `module.exports`



























# Copyright
Rutgers Coding Boot Camp (C) 2016. All Rights Reserved.