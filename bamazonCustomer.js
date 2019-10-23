var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "6jvbkoi4",
  database: "bamazon"
});

var selectedItemId;
var desiredQuantity;
var stockQuantity = 0;
var newQuantity = 0;
var itemPrice = 0;

connection.connect(function (err) {
    if (err)
    throw err;
    displayProducts();
});

function displayProducts() {
    var query = "SELECT * FROM products";
    connection.query(query, function(err, response) {
        console.table(response);
        inquirer.prompt({
            name: "itemId",
            type: "input",
            message: "Please enter 'Item ID': ",
          })
          .then(function(answer) {
            selectedItemId = answer.itemId;
            inquirer.prompt({
                name: "quantity",
                type: "input",
                message: "Please enter Quantity: "
            })
            .then(function(answer) {
                desiredQuantity = answer.quantity;
                purchaseItem();
            });
          });          
    });
}

function purchaseItem() {

    var itemQuery = "SELECT * FROM products WHERE item_id = ?";
    connection.query(itemQuery, [selectedItemId], function(err, response) {
        stockQuantity = response[0].stock_quantity;
        itemPrice = response[0].price;
        if(stockQuantity > desiredQuantity) {
            newQuantity = stockQuantity-desiredQuantity;
            var updateQuantityQuery = "UPDATE products SET stock_quantity = ? WHERE item_id = ?";
            connection.query(updateQuantityQuery, [newQuantity, selectedItemId], function(err, response) {
                connection.query(itemQuery, [selectedItemId], function(err, response) {
                    console.table(response);
                    console.log("Item Purchased! Order total: $" + (desiredQuantity * itemPrice));
                });
            });
        }
        else {
            console.log("Not enough in stock");
        }
    });
}