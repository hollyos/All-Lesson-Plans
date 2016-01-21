//setup db
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'myTestDB'
});

connection.connect(function(err) {
	if (err) {
	console.error('error connecting: ' + err.stack);
	return;
	};
	console.log('connected as id ' + connection.threadId);
});

//setup npm
var faker = require('faker');
var prompt = require('prompt');

/*
var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties
*/