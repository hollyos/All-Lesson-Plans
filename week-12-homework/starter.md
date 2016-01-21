App setup:

1.create App Dir
2.npm init
3.npm install mysql --save
4.mysql config
5.npm install prompt --save
5.create index.js


mySQL setup:
launch: MySQL 5.7 Command Line Client
enter password

CREATE DATABASE myTestDB;
USE myTestDB;

CREATE TABLE Tasks
(
ID int NOT NULL AUTO_INCREMENT,
Todo varchar(255) NOT NULL,
Done BOOL,
Date TIMESTAMP,
PRIMARY KEY (ID)
);

SHOW COLUMNS from Tasks;

INSERT INTO Tasks (Todo, Done) VALUES ('Dishes', False) ;

SELECT * FROM Tasks;

DROP DATABASE myTestDB;