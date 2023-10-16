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
