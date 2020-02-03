const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : process.env.DB_PASS,
  database : 'checkout_description_db'
});

connection.connect();

let getListing = (id, callback) => {
  connection.query('SELECT * FROM products WHERE id=' + id, (error, data) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports.getListing = getListing;