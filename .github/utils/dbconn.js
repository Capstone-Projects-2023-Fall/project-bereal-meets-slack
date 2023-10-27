const mysql = require('mysql2');
require('dotenv').config();

function createconnectionpool(){

const dboptions = {
  connectionLimit : 10, 
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME,
}
  return mysql.createPool(dboptions);
};

pool = createconnectionpool();
console.log(pool);

pool.query("SELECT * FROM prompts",(err, data) => {
  if(err) {
      console.error(err);
      return;
  }
  // rows fetch
  console.log(data);
});


