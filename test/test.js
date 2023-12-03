const getPrompts = require('../utils/promptUtils.js');

var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Math Operation', function() {
  it('add two numbers', () => {
    const result = 1 + 2;
    assert.equal(result, 3);
  })
})

describe('Math Operation', function() {
  it('add three numbers', () => {
    const result = 1 + 2 + 3;
    assert.equal(result, 3);
  })
})

describe('String Tests', () => {
  it('returns the length of a string', () => {
    const helloWorld = 'Hello, World!';
    const stringLength = helloWorld.length;

    assert.equal(stringLength, 13);
  });

  describe('#indexOf()', function () {
    it('should return the index when the value is present', function () {
      assert.equal([1, 2, 3].indexOf(2), 1);
    });
  });

  describe('#indexOf()', function () {
    it('should handle duplicate values and return the first index', function () {
      assert.equal([1, 2, 2, 3].indexOf(2), 1);
    });
  });
  
});


//addPrompt() test
describe('addPrompt()', () => {
  it('a prompt was added', async () => {
    tPrompt = "Let's see what everyone is cooking today!: "
    const promptToAdd = tPrompt; 
    const addResult = await addPrompt(promptToAdd);
    assert.strictEqual(addResult, `Prompt "${promptToAdd}" has been added to the list.`);

    // check if  prompt  included when retrieving prompts
    const promptsAfterAdd = await getPrompts();
    const addedPromptExists = promptsAfterAdd.some(prompt => prompt.prompt_text === promptToAdd);

    assert.ok(addedPromptExists);
  });
});


//deletePrompt() test
describe('delete Prompt()', () => {
  it('completely deletes prompts', async () => {

    const initialPrompts = await getPrompts(); 
    const tPrompt = initialPrompts[0];
    await deletePrompt(tPrompt); 
    const promptsAfterDelete = await getPrompts();

    //check if the array is smaller 
    assert.strictEqual(promptsAfterDelete.length, initialPrompts.length - 1); 

    assert.ok(!promptsAfterDelete.includes(tPrompt));
  });
});



// getPrompt() test
describe('getPrompt()', () => {
  it('gets zero prompts', async () => {
    const result = await getPrompts();
    assert.equal(result.length, 0);
  });
});

describe('getPrompt()', () => {
  it('gets one prompt', async () => {
    const result = await getPrompts();
    assert.equal(result.length, 1);
  });
});

describe('getPrompt()', () => {
  it('gets multiple prompts', async () => {
    const result = await getPrompts();
    assert.ok(result.length > 1);
  });
});


//listPrompts()
describe('listPrompts()', () => {
  it('returns a formatted list of prompts', async () => {
    //assume prompts in dbase
    const result = await listPrompts();
    assert.ok(result.startsWith('Current Prompts:'));
  });
});

//getRandomPrompt()
describe('getRandomPrompt()', () => {
  it('returns a random prompt', async () => {
    //assume prompts in dbase
    const randomPrompt = await getRandomPrompt();

    // Check if the result is not null, indicating that a prompt was retrieved
    assert.ok(randomPrompt !== null);

  });
});

