const { SlashCommandBuilder } = require('discord.js');
const { LocalStorage } = require('node-localstorage');
const dbconn = require('../utils/dbconn.js');

const localStorage = new LocalStorage('./data');
const promptArray = JSON.parse(localStorage.getItem('prompts')) || [];

const pool = dbconn.createConnectionPoolLocal();

function fetchPromptsList(callback) {
  pool.query("SELECT prompt_text FROM bot.prompts", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    dbprompts = data;
    if (callback) {
      callback(dbprompts);
    }
  });
}

function addPrompt(prompt) {
  promptArray.push(prompt);
  localStorage.setItem('prompts', JSON.stringify(promptArray));

  pool.query(`INSERT INTO bot.prompts (prompt_text)VALUES('${prompt}')`, (err) => {
    if(err) {
      console.error(err);
      return;
    }
  });
  return `Prompt "${prompt}" has been added to the list.`;
}

function deletePrompt(promptToDelete, isDeletePrompt = true) {
  const fullMatches = promptArray.filter((prompt) => prompt === promptToDelete);
  const partialMatches = promptArray.filter(prompt => prompt.includes(promptToDelete) && !fullMatches.includes(prompt));

  return isDeletePrompt
    ? fullMatches.length === 1

      ? (() => {
        const index = promptArray.indexOf(fullMatches[0]);
        promptArray.splice(index, 1);
        localStorage.setItem('prompts', JSON.stringify(promptArray));
        return `Prompt "${fullMatches[0]}" has been deleted. Current prompts: ${promptArray.join(', ')}`;
      })()
      : fullMatches.length === 0 && partialMatches.length > 0
        ? `Prompt(s) that partially match "${promptToDelete}":\n${partialMatches.join('\n')}`
        : `No prompts found that match "${promptToDelete}"\nall prompts: ${promptArray}`

    : partialMatches.length > 0
      ? `Matching prompts for "${promptToDelete}": ${partialMatches.join(', ')}`
      : `No prompts found that match "${promptToDelete}"`;
}

function listPrompts() {
  return `Current prompts: ${promptArray.join(', ')}`;
}

function searchPrompts(query) {

  const partialMatches = promptArray.filter(prompt => prompt.includes(query));

  return partialMatches.length === 0
    ? `No prompts found that match "${query}"\nall prompts: ${promptArray}`
    : `Search results for "${query}":\n${partialMatches.join('\n')}`;
}



module.exports = {
  data: new SlashCommandBuilder()
    .setName('prompts')
    .setDescription('Manage prompts.')
    .addSubcommand(subcommand =>
      subcommand
        .setName('add')
        .setDescription('Add a new prompt.')
        .addStringOption(option =>
          option
            .setName('prompt')
            .setDescription('Enter a new prompt.')
            .setRequired(true),
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('delete')
        .setDescription('Delete a prompt from the list.')
        .addStringOption(option =>
          option
            .setName('prompt')
            .setDescription('Enter the prompt to delete')
            .setRequired(true),
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('list')
        .setDescription('List all prompts.')
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('search')
        .setDescription('Search for prompts in the list.')
        .addStringOption(option =>
          option
            .setName('search-term')
            .setDescription('Search prompt list:')
            .setRequired(true),
        )
    ),
  async execute(interaction) {
    const subcommand = interaction.options.getSubcommand();
    let reply = '';

    reply = subcommand === 'add'
      ? (() => {
        const prompt = interaction.options.getString('prompt');
        return addPrompt(prompt);
      })()
      : subcommand === 'delete'
        ? (() => {
          const promptToDelete = interaction.options.getString('prompt');
          return deletePrompt(promptToDelete, subcommand === 'delete');
        })()
        : subcommand === 'list'
          ? listPrompts()
        : subcommand === 'search'
          ? (() => {
            const query = interaction.options.getString('search-term');
            return searchPrompts(query);
          })()
          : '';

    await interaction.reply(reply);
  },
};