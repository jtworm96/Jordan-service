const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : process.env.DB_PASS,
  database : 'checkout_description_db'
});

connection.connect();
