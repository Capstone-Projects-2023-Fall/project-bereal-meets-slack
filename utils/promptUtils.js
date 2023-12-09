const {pool} = require('./dbconn.js');

async function getPrompts(guildId){
  const [rows] = await pool.query("SELECT prompt_text FROM bot.prompts WHERE guild_id = ?", [guildId]);
  return rows.map(row => row.prompt_text);
}

async function addPrompt(guildId, prompt, channelId) {
  const query = "INSERT INTO bot.prompts (guild_id, prompt_text, channel_id) VALUES (?, ?, ?)";
  await pool.query(query, [guildId, prompt, channelId]);
  return `Prompt "${prompt}" has been added to the list in <#${channelId}>.`;
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

async function listPrompts(guildId, client){
  const[rows] = await pool.query("SELECT prompt_text, channel_id FROM bot.prompts WHERE guild_id = ?", [guildId]);

  let response = 'Current Prompts:\n';
  for (const row of rows){
    const channelName = row.channel_id ? client.channels.cache.get(row.channel_id)?.name : 'No channel';
    response += `Prompt: ${row.prompt_text} - Channel: ${channelName}\n`;
  }
  return response;
}

async function searchPrompts(guildId, query) {
  const prompts = await getPrompts(guildId);
  console.log(prompts);
  const partialMatches = prompts.filter(prompt => prompt.includes(query));

  console.log(partialMatches);

  return partialMatches.length === 0
    ? `No prompts found that match "${query}"\nall prompts: ${prompts.join('\n')}`
    : `Search results for "${query}":\n${partialMatches.join('\n')}`;
}

async function getRandomPrompt(){
  const query = "SELECT prompt_text, channel_id FROM prompts ORDER BY RAND() LIMIT 1";
  const [rows] = await pool.query(query);

  if (rows.length > 0 && rows[0].channel_id) {
    return{
      promptText: rows[0].prompt_text,
      channelId: rows[0].channel_id
    };
  } else{

  return null;
  }
}

module.exports = {
    getPrompts,
    getRandomPrompt,
    addPrompt,
    deletePrompt,
    listPrompts,
    searchPrompts
};