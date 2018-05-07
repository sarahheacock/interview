const chai = require('chai');
const assert = chai.assert;

module.exports = describe('david quiz', () => {
  // HOISTING FUNCTIONS
  // only declarations are hoisted

  // BLOCK-LEVEL SCOPING
  // changing 'var' to 'let' will state foo was already declared
  // remove function too and we get a reference error
  it(`function bar() {
        return foo;
        foo = 10;
        function foo() {}
        var foo = '11';
      } --> typeof bar() should equal 'function'`, (done) => {
    function bar() {
      return foo;
      foo = 10;
      function foo() {}
      var foo = '11';
    }

    assert.typeOf(bar(), 'function');
    done();
  })

  // you cannot form subtraction on strings so Javascript converts the
  // strings into numbers
  it('"1" - - "1" should return 2', (done) => {
    const result = "1" - - "1";
    assert.typeOf(result, 'number');
    assert.equal(result, 2);
    done();
  })

  // `instanceof` operator tests whether the prototype property of constructor
  // appears anywhere in the prototype chain of an object
  it('instanceof new String("This is a string") === String', (done) => {
    const obj = new String("This is a string");

    assert.equal(typeof obj === 'object', true);
    assert.equal(obj instanceof String, true);

    assert.typeOf("This is a string", 'string');
    assert.equal("hello" instanceof String, false);
    done();
  })

  // + coerces arrays to strings
  it('adding arrays should create a string', (done) => {
    const str = [] + [] + 'foo'.split('');
    assert.equal(str, "f,o,o");
    done();
  })

  // toString() joins an array and returns one string
  // called when an array is represented as text value
  // or array is referred to in string concatenation
  it('new Array(3).toString() should return ",,"', (done) => {
    const str = new Array(3).toString();
    assert.equal(str, ",,");
    done();
  })

  it('truncate an array by changing length', (done) => {
    const myArr = ['foo', 'bar', 'baz'];
    myArr.length = 0;
    myArr.push('bin');

    assert.equal(myArr.length, 1);
    assert.equal(myArr[0], 'bin');
    done();
  })

  it("should create string with String global object", (done) => {
    assert.equal(String("hello"), "hello");
    done();
  })

  it('"in" operator returns true if property in specified object', (done) => {
    var myArr = ['foo', 'bar', 'baz'];
    assert.equal('2' in myArr, true);
    done();
  })

  // cannot increase length of arguments object
  // you can automatically increase array length by adding elements or pushing
  it('cannot increase length of arguments object', (done) => {
    function foo(a, b) {
      arguments[1] = 2
      return arguments.length;
    }
    assert.equal(foo(1), 1)
    done();
  })

  it('NaN is a number', (done) => {
    assert.equal(typeof NaN, 'number');
    assert.equal(JSON.parse(JSON.stringify(NaN)), null);
    assert.equal(NaN === NaN, false);
    assert.deepEqual(NaN, NaN);
    done();
  })
})




// NaN === NaN;
