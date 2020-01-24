DROP DATABASE IF EXISTS checkout_description_db;

CREATE DATABASE checkout_description_db;

USE checkout_description_db;

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR NOT NULL,
    description TEXT NOT NULL,
    price FLOAT NOT NULL
);

CREATE TABLE options (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    product_id INT FOREIGN KEY REFERENCES products(id) NOT NULL,
    name VARCHAR NOT NULL,
    value VARCHAR NOT NULL
);

CREATE TABLE sellers (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    company VARCHAR NOT NULL,
    seller VARCHAR NOT NULL,
    picture VARCHAR NOT NULL,
    location VARCHAR NOT NULL
);

CREATE TABLE reviews (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    count INT NOT NULL,
    average FLOAT NOT NULL
);