const mysql = require('mysql2');
require('dotenv').config();

function createConnectionPool(){ //use this one for local calls when testing.
const dboptions = {
  connectionLimit : 15, 
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME,
}
  return mysql.createPool(dboptions);
};


const tempPool = createConnectionPool();
const pool = tempPool.promise();

module.exports = {
  pool
};