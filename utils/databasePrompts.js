const mysql = require('mysql2');

//database connection
const dbconn = require('./dbconn.js');
promisepool = dbconn.createPromiseConnectionPool();

module.exports = {
  getRandomPrompt: async () => {
      // this should go through the database and select a random prompt
      const [rows] = await promisepool.query('SELECT * FROM prompts ORDER BY RAND() LIMIT 1');

      promisepool.end();
      
      if (rows.length > 0) {
        return rows[0].prompt_text;
      }

      return null;
  },
};
