const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'sdc',
  host: '127.0.0.1',
  database: 'sdcdata',
  password: 'Password',
  port: 5432,
})

const getListingPG = (id, callback) => {
  pool.query('SELECT * FROM data WHERE id=' + id, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(nul, data);
    }
  })
}

module.exports = {
  getListingPG
};