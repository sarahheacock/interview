const Stack = require('./Stack.js');

const stack = new Stack();
const arr = [12, 10, 13, 15, 20, 9];

for(let i = 0; i < arr.length; i++){
  stack.push(arr[i]);
}
stack.pop();

console.log(stack.getMin());
