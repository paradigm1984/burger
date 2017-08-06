DROP TABLE IF EXISTS burgers;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
	id int AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(55) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    date TIMESTAMP,
	PRIMARY KEY (id)
);
