var mysql = require('mysql');
const inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'test',
  database: 'ice_creamDB'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId + '\n');
  // createProduct();
  promptInput();
});

const promptInput = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What do you want to do?',
        choices: ['Create Product', 'View Product', 'Update Product', 'Delete Product'],
        name: 'option'
      }
    ])
    .then(res => {
      switch (res.option) {
        case 'Create Product':
          promptProductInfo();
          break;
        case 'View Product':
          readProducts();
          break;
        case 'Update Product':
          promptUpdateProduct();
          break;
        case 'Delete Product':
          promptDeleteProduct();
          break;
      }
    });
};

const promptProductInfo = () => {
  inquirer
    .prompt([
      { type: 'input', message: 'Enter flavor', name: 'flavor' },
      { type: 'input', message: 'Enter price', name: 'price' },
      { type: 'input', message: 'Enter quantity', name: 'quantity' }
    ])
    .then(res => {
      createProduct(res.flavor, parseFloat(res.price), parseInt(res.quantity));
    });
};

const promptUpdateProduct = () => {
  inquirer
    .prompt([{ type: 'input', message: 'Enter quantity', name: 'quantity' }, { type: 'input', message: 'Enter flavor', name: 'flavor' }])
    .then(res => {
      updateProduct(parseFloat(res.quantity), res.flavor);
    });
};

const promptDeleteProduct = () => {
  inquirer.prompt([{ type: 'input', message: 'Enter flavor', name: 'flavor' }]).then(res => {
    deleteProduct(res.flavor);
  });
};

function createProduct(flavor, price, quantity) {
  console.log('Inserting a new product...\n');
  var query = connection.query(
    'INSERT INTO products SET ?',
    {
      flavor: flavor,
      price: price,
      quantity: quantity
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + ' product inserted!\n');
      // Call updateProduct AFTER the INSERT completes
      updateProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function updateProduct(quantity, flavor) {
  console.log('Updating all Rocky Road quantities...\n');
  var query = connection.query(
    'UPDATE products SET ? WHERE ?',
    [
      {
        quantity: quantity
      },
      {
        flavor: flavor
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + ' products updated!\n');
      // Call deleteProduct AFTER the UPDATE completes
      deleteProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function deleteProduct(flavor) {
  console.log('Deleting all strawberry icecream...\n');
  connection.query(
    'DELETE FROM products WHERE ?',
    {
      flavor: flavor
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + ' products deleted!\n');
      // Call readProducts AFTER the DELETE completes
      readProducts();
    }
  );
}

function readProducts() {
  console.log('Selecting all products...\n');
  connection.query('SELECT * FROM products', function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}
