const mysql = require('mysql2');

//database connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

module.exports = {
  getRandomPrompt: async () => {
    try {
      connection.connect();

      // this should go through the database and select a random prompt
      const [rows] = await connection.promise().query('SELECT * FROM prompts ORDER BY RAND() LIMIT 1');

      if (rows.length > 0) {
        return rows[0].prompt;
      }

      connection.end();
    } catch (error) {
      console.error('Error fetching random prompt:', error);
      return null;
    }
  },
};
