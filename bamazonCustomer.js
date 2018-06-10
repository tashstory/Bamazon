var express = require("express")
var inquirer = require("inquirer")
var mysql = require("MySql")


var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Celt2216!",
    database: "bamazon_db"
  });
  
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    start();
    console.log("connected as id " + connection.threadId);
  });

  


function start() {
  inquirer
    .prompt({
      name: "richenough",
      type: "rawlist",
      message: "Are you [rich] enough to shop with us? or are you [poor]",
      choices: ["RICH", "POOR"]
    })
    .then(function(answer) {
      
      if (answer.richenough.toUpperCase() === "RICH") {
        SHOP();
      }
      else {
        GETAJOB();
      }
    });
}


function SHOP() {
    
    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
      
      inquirer
        .prompt([
          {
            name: "choice",
            type: "rawlist",
            choices: function() {
            var choicearray2 = [];
              var choiceArray = [];
              for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].product_name)
               /* choiceArray2(results[i].product_name + "    |        " + results[i].stock_quantity + " Left in stock.   |        " + results[i].price + "    |         " + results[i].department_name + " Department");*/
              }


              
    
            console.log("-----------------------------------");
  
              return choiceArray;
            },
            message: "What item do you need"
          },
          {
            name: "amount",
            type: "input",
            message: "How many do you need?"
          }
        ])
        .then(function(answer) {
            
            parseInt(answer)
            
         
          var chosenItem;
          for (var i = 0; i < results.length; i++) {
              
              
            if (results[i].product_name === answer.choice) {
              chosenItem = results[i];
              console.log(results[i].product_name + "    |        ID:" + results[i].item_id + "    |        " + results[i].stock_quantity + " Left in stock.   |        " + results[i].price + "    |         " + results[i].department_name + " Department");
              if(chosenItem.stock_quantity >= answer.amount){
                  console.log("We have enough, we'll take your money now...thanks!")
                  var newAmount = chosenItem.stock_quantity - answer.amount;
                  console.log(results[i].product_name +" "   + results[i].stock_quantity + " Left in stock.");

                  console.log("Total cost of purchase: " + results[i].price*answer.amount)
                 /* connection.query(
                    "UPDATE products SET ?",
                    {
                      stock_quantity: newAmount
                    },
                    function(err) {
                      if (err) throw err;
                      console.log("Your auction was created successfully!");
                      // re-prompt the user for if they want to bid or post
                      start();
                    }
                );*/

              }
              else if (chosenItem.stock_quantity <= answer.amount){
                  console.log("We don't have that many, you must be richer than we thought...awkward")
              }
            }
          }
          
         

    })
    })
}
