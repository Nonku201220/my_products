/* const request = require('request');
const mysql = require('mysql');

// Retrieve data from the API
request.get('https://dummyjson.com/product', function(error, response, body) {
  if (!error && response.statusCode == 200) {
    const data = JSON.parse(body);

    // Connect to MySQL database
    const cnx = mysql.createConnection({
      host: '127.0.0.1 ',
      your_username :'root',
      password: 'root',
      database: 'rest_api'
    });

    cnx.connect();

    // Prepare INSERT statement
    const add_data = "INSERT INTO products (name, price, description) VALUES (?, ?, ?)";
    const data_values = [data.name, data.price, data.description];

    // Execute INSERT statement
    cnx.query(add_data, data_values, function(err, result) {
      if (err) throw err;
      console.log("Data inserted successfully");
    });

    // Close database connection
    cnx.end();
  }
}); */

