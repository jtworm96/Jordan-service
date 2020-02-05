const express = require('express');
const bodyparser = require('body-parser');
// const db = require('Database/index.js');
const mysql = require('mysql');
const cors = require('cors');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());

const connection = mysql.createConnection({
  host : 'fec-database.c3s7gc1wdbtz.us-east-2.rds.amazonaws.com',
  user : 'root',
  password : 'password',
  database : 'checkout_description_db'
});

connection.connect();

let getListing = (id, callback) => {
  connection.query('SELECT * FROM products WHERE listing_id=' + id, (error, data) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  });
};

app.get("/listings", (req, res) => {
  getListing(req.query.listingid, (error, results) => {
    if (error) {
      console.error(error);
    }
    else {
      res.send(results);
    }
  });
});

let port = 1337;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

