CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INTEGER(30) AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price INTEGER(30),
    stock_quantity INTEGER(30),
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shirt", "Clothes", 10, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jeans", "Clothes", 15, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chips", "Snacks", 5, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Popcorn", "Snacks", 7, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone", "Phones", 700, 300);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Samsung Galaxy", "Phones", 700, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bracelet", "Accessories", 60, 400);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Necklace", "Accessories", 80, 400);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hammer", "Tools", 10, 500);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nails", "Tools", 1, 500);