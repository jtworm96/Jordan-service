DROP DATABASE IF EXISTS checkout_description_db;

CREATE DATABASE checkout_description_db;

USE checkout_description_db;

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price FLOAT NOT NULL,
    materials VARCHAR(255) NOT NULL
);

CREATE TABLE options (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    product_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    value VARCHAR(255) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE sellers (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    picture VARCHAR(255) NOT NULL,
    location VARCHAR(255)
);

CREATE TABLE reviews (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    count INT NOT NULL,
    average FLOAT NOT NULL
);