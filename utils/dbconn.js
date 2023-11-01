const mysql = require('mysql2');
require('dotenv').config();

function createConnectionPoolLocal(){ //use this one for local calls when testing.

const dboptions = {
  connectionLimit : 10, 
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME,
}
  return mysql.createPool(dboptions);
};

function createConnectionpoolCloud(){
  const dboptions = {
    connectionLimit : 10, 
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
    socketPath: process.env.INSTANCE_UNIX_SOCKET
  }
  return mysql.createPool(dboptions);
};

module.exports = {
  createConnectionPoolLocal,
  createConnectionpoolCloud
};