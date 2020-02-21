const mysql = require('mysql');

const connection = mysql.createConnection({
  host : 'fec-database.c3s7gc1wdbtz.us-east-2.rds.amazonaws.com',
  user : 'root',
  password : 'password',
  database : 'checkout_description_db'
});

// connection.connect(() => {
//   console.log('connected to mySQL')
// });

const getListingMySql = (id, callback) => {
  connection.query('SELECT * FROM products WHERE listing_id=' + id, (error, data) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  getListingMySql
};