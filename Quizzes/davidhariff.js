// HOISTING FUNCTIONS
// only declarations are hoisted

// BLOCK-LEVEL SCOPING
// changing 'var' to 'let' will state foo was already declared
// remove function too and we get a reference error
function bar() {
  return foo;
  foo = 10;
  function foo() {}
  var foo = '11';
}
console.log(typeof bar()); // 'function'

// SUBTRACTING STRINGS
console.log("1" - - "1"); // 2
console.log("1" - "1"); // 0
console.log("1" - - "1"); // 2
console.log("s" - - "a") // NaN

new String("This is a string") instanceof String; // true

[] + [] + 'foo'.split(''); // 'foo'

new Array(5).toString(); // ',,,,'

var myArr = ['foo', 'bar', 'baz'];
myArr.length = 0;
myArr.push('bin');
console.log(myArr); // ['bin']

String('Hello') === 'Hello'; // true

var x = 0;
function foo() {
    x++;
    this.x = x;
    return foo;
}
var bar = new new foo;
console.log(bar.x); // undefined

"This is a string" instanceof String; // false
new String("This is a string") instanceof String;

var bar = 1,
    foo = {};

foo: {
    bar: 2;
    baz: ++bar;
};
foo.baz + foo.bar + bar;

var myArr = ['foo', 'bar', 'baz'];
myArr[2];
console.log('2' in myArr);

console.log(10 > 9 > 8);

function foo(a, b) {
    arguments[1] = 2;
    alert(b);
}
foo(1); // undefined

NaN === NaN;
