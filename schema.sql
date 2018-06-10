-- Created the DB "wizard_schools_db" (only works on local connections)
DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;


-- Created the table "schools" 
CREATE TABLE products (
  item_id int AUTO_INCREMENT,
  product_name varchar(30) NOT NULL,
  department_name varchar(30) NOT NULL,
  PRIMARY KEY(id),
  price VARCHAR(30),
  stock_quantity INTEGER(30)
);

-- Inserted a set of records into the table
INSERT INTO actors (product_name, department_name, price, stock_quantity) VALUES ("Solid Gold Toilet", "Toiletries", "$50,000", 1);
INSERT INTO actors (product_name, department_name, price, stock_quantity) VALUES ("Kashmir toilet paper", "Toiletries", "$500", 10);
INSERT INTO actors (product_name, department_name, price, stock_quantity) VALUES ("Full scale model of Proteobacteria", "Education", "$.01", 75000000);
INSERT INTO actors (product_name, department_name, price, stock_quantity) VALUES ("Cape", "Clothing", "$10", 75);
INSERT INTO actors (product_name, department_name, price, stock_quantity) VALUES ("One shoe", "Clothing", "$25", 10);

INSERT INTO actors (product_name, department_name, price, stock_quantity) VALUES ("Deflated Balloons", "Toys", "$.25", 1);
INSERT INTO actors (product_name, department_name, price, stock_quantity) VALUES ("Dictionary(Words not included", "Education", "$15", 23);
INSERT INTO actors (product_name, department_name, price, stock_quantity) VALUES ("Purple Oranges", "Food", "$3", 150);
INSERT INTO actors (product_name, department_name, price, stock_quantity) VALUES ("Answers to your homework", "Education", "$10", 1);
INSERT INTO actors (product_name, department_name, price, stock_quantity) VALUES ("Legless Chairs", "Clothing", "$33", 28);
SELECT * FROM actors;