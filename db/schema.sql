

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
	id int AUTO_INCREMENT,
	burger_name VARCHAR(55) NOT NULL,
    eaten BOOLEAN default false,
    date TIMESTAMP,
	PRIMARY KEY (id)
);
