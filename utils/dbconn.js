const mysql = require('mysql2');
require('dotenv').config();

function createConnectionPoolLocal(){ //use this one for local calls when testing.
const dboptions = {
  connectionLimit : 15, 
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME,
}
  return mysql.createPool(dboptions);
};

function createConnectionPoolCloud(){
  const dboptions = {
    connectionLimit : 15,
    socketPath: process.env.INSTANCE_UNIX_SOCKET,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
    waitForConnections: true,
    connectTimeout: 2000
  }
  return mysql.createPool(dboptions);
};

function createPromiseConnectionPool(){
  let promisepool;
  var flag = process.env.PROD_FLAG;
  if(flag === "CLOUD"){
    console.log("CLOUD check");
    const pool = createConnectionPoolCloud();
    promisepool = pool.promise();
  }
  else if(flag === "LOCAL"){
    console.log("LOCAL check");
    const pool = createConnectionPoolLocal();
    promisepool = pool.promise();
  }
  return promisepool;
};

const pool = createPromiseConnectionPool();

module.exports = {
  pool
};