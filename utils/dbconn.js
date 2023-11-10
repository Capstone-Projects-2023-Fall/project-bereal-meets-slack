const mysql = require('mysql2');
const mysqlpromise = require('mysql2/promise')
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

async function createConnectionPoolCloud(){
  const dboptions = {
    connectionLimit : 10,
    socketPath: process.env.INSTANCE_UNIX_SOCKET,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
    waitForConnections: true,
    connectTimeout: 5000
  }
  return await mysqlpromise.createPool(dboptions);
};

module.exports = {
  createConnectionPoolLocal,
  createConnectionPoolCloud
};