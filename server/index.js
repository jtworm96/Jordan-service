require('newrelic');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mysql = require('../Database/mysql');
const pg = require('../Database/postgres');
const mdb = require('../Database/mongodb')
const cors = require('cors');
const port = 3000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());

app.get("/listings", (req, res) => {
  mysql.getListingMySql(req.query.listingid, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

app.get("/listings1", (req, res) => {
  pg.getListingPG(req.query.listingid, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

app.get("/listings2", (req, res) => {
  mdb.getListingMDB(req.query.listingid, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

