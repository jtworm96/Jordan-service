const MongoClient = require('mongodb').MongoClient;

const getListingMDB = (id, callback) => {
  MongoClient.connect("mongodb://localhost:27017/MyDb", (err, db) => {
    db.collection('Persons', (err, collection) => {
      collection.find().toArray((err, items) => {
        if(err) throw err;    
          console.log(items);            
      });
    });          
  });
}

module.exports = {
  getListingMDB
};