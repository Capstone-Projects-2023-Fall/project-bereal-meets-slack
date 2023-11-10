const dbconn = require('../utils/dbconn.js');
require('dotenv').config();

var flag = process.env.PROD_FLAG;

let promisepool;
if(flag === "CLOUD"){
  console.log("CLOUD check");
  promisepool = dbconn.createConnectionPoolCloud();
}
else if(flag === "LOCAL"){
  console.log("LOCAL check");
  const pool = dbconn.createConnectionPoolLocal();
  promisepool = pool.promise();
}


async function getPrompts(){
  [rows, fields] = await promisepool.query({sql: "SELECT prompt_text FROM bot.prompts", rowsAsArray: true});
  promptArray = rows;
  return promptArray;
}

async function addPrompt(prompt) {
 await promisepool.query(`INSERT INTO bot.prompts (prompt_text)VALUES('${prompt}')`);
 return `Prompt "${prompt}" has been added to the list.`;
}

async function deletePrompt(promptToDelete) {
  [rows, fields] = await promisepool.query({sql: `SELECT prompt_id, prompt_text FROM bot.prompts WHERE prompt_text LIKE "%${promptToDelete}%"`, rowsAsArray: true});
  promptArray = rows;
  const fullMatches = promptArray.filter(prompt => prompt[1] === promptToDelete);
  const partialMatches = promptArray.filter(prompt => prompt[1].includes(promptToDelete));

  if(fullMatches.length > 0){
    try{
      await promisepool.query(`DELETE FROM bot.prompts WHERE prompt_id = ${fullMatches[0][0]}`);
      return `${fullMatches[0][1]} was deleted`
    }
    catch(error){return "There was an error deleting the specified prompt!"}

  }
  else if(partialMatches.length > 0){
    return `Did not find specified prompt, did you mean: ${partialMatches.join(", ")}`
  }
  else{ return "Prompt Not Found."}

}

async function listPrompts() {
  promptArray = await getPrompts();
  return `Current Prompts: ${promptArray.join(', ')}`;
}

async function searchPrompts(query) {
  promptArray = await getPrompts();
  console.log(promptArray);
  const partialMatches = promptArray.filter(prompt => prompt[0].includes(query));

  console.log(partialMatches);

  return partialMatches.length === 0
    ? `No prompts found that match "${query}"\nall prompts: ${promptArray}`
    : `Search results for "${query}":\n${partialMatches.join('\n')}`;
}

module.exports = {
    getPrompts,
    addPrompt,
    deletePrompt,
    listPrompts,
    searchPrompts
};