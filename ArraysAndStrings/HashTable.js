const chai = require('chai');
const assert = chai.assert;

module.exports = describe('start', () => {
  it('should return green', (done) => {
    const foo = 'foo';
    assert.typeOf(foo, 'string');
    done();
  })
})
