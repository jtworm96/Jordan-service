const express = require('express');
const bodyparser = require('body-parser');
const db = require('../database/index.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

let port = 1337;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

