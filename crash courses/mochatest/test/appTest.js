const assert = require('chai').assert;
const app = require('../server');

describe('app', function() {
  it('app should return hello', function() {
    assert.equal(app(), 'hello');
  });
});
