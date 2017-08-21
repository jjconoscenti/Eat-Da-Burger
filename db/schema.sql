DROP DATABASE burger_db IF EXISTS;

CREATE DATABASE burger_db;

USE burger_db;

create table burgers (
id int not null AUTO_INCREMENT,
burger_name VARCHAR(255),
devoured BOOLEAN,
date TIMESTAMP,
PRIMARY KEY (id)
);
