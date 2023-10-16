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
  it('add two numbers', () => {
    const result = 1 + 2;
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

