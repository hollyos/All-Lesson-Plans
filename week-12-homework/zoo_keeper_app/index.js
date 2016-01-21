//setup db
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myTestDB'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    };
    console.log('connected as id ' + connection.threadId);
});

//setup npm
var prompt = require('prompt');
var animals = require('animals');
var generateName = require('sillyname');

var sillyName = generateName() + "mon";
var randomAnimal = animals();
console.log(sillyName, randomAnimal);
