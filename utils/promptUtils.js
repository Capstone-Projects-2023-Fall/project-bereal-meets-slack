const {pool} = require('./dbconn.js');

async function getPrompts(guildId){
  const [rows] = await pool.query("SELECT prompt_text FROM bot.prompts WHERE guild_id = ?", [guildId]);
  return rows.map(row => row.prompt_text);
}

async function addPrompt(guildId, prompt) {
 await pool.query("INSERT INTO bot.prompts (guild_id, prompt_text) VALUES (?, ?)", [guildId, prompt]);
 return `Prompt "${prompt}" has been added to the list.`;
}

async function deletePrompt(guildId, promptToDelete) {
  const [rows] = await pool.query("SELECT prompt_id, prompt_text FROM bot.prompts WHERE guild_id = ? AND prompt_text LIKE ?", [guildId, `%${promptToDelete}%`]);
 
  const fullMatches = rows.filter(prompt => prompt.prompt_text === promptToDelete);
  const partialMatches = rows.filter(prompt => prompt.prompt_text.includes(promptToDelete) && prompt.prompt_text !== promptToDelete);

  if(fullMatches.length > 0){
    try{
      await pool.query("DELETE FROM bot.prompts WHERE guild_id = ? AND prompt_id = ?", [guildId, fullMatches[0].prompt_id]);
      return `${fullMatches[0].prompt_text} was deleted`
    }
    catch(error){return "There was an error deleting the specified prompt!"}

  }
  else if(partialMatches.length > 0){
    return `Did not find specified prompt, did you mean: ${partialMatches.map(p => p.prompt_text).join(", ")}`;
  }
  else{ return "Prompt Not Found."}

}

async function listPrompts(guildId) {
  const prompts = await getPrompts(guildId);
  return `Current Prompts: \n${prompts.join('\n')}`;
}

async function searchPrompts(guildId, query) {
  const prompts = await getPrompts(guildId);
  console.log(prompts);
  const partialMatches = prompts.filter(prompt => prompt.includes(query));

  console.log(partialMatches);

  return partialMatches.length === 0
    ? `No prompts found that match "${query}"\nall prompts: ${promptArray}`
    : `Search results for "${query}":\n${partialMatches.join('\n')}`;
}

async function getRandomPrompt(guildId){
  // this should go through the database and select a random prompt
  const [rows] = await pool.query("SELECT prompt_text FROM bot.prompts WHERE guild_id = ? ORDER BY RAND() LIMIT 1", [guildId]);
  
  if (rows.length > 0) {
    return rows[0].prompt_text;
  }

  return null;
}

module.exports = {
    getPrompts,
    getRandomPrompt,
    addPrompt,
    deletePrompt,
    listPrompts,
    searchPrompts
};