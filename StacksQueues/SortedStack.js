// create stack where lowest values are on top
const Stack = require('./Stack.js');

function SortedStack(){
  this.store = new Stack();
  this.temp = new Stack();
  this.length = 0;
}

SortedStack.prototype.push = function(val){
  if(!this.length){
    this.store.push(val);
    this.length++;
    return;
  }

  while(val < this.temp.peek() && !this.temp.isEmpty()){
    const popped = this.temp.pop();
    this.store.push(popped);
  }

  while(val > this.store.peek() && !this.store.isEmpty()){
    const remove = this.store.pop();
    this.temp.push(remove);
  }

  this.length++;
  this.store.push(val)
}

SortedStack.prototype.pop = function(){
  if(!this.length){
    return;
  }

  while(this.temp){
    const popped = this.temp.pop();
    this.store.push(popped);
  }
  this.store.pop();
  this.length--;
}

SortedStack.prototype.isEmpty = function(){
  return this.length === 0;
}

SortedStack.prototype.peek = function(){
  if(!this.length){
    return;
  }

  if(!this.temp.isEmpty()){
    this.temp.getMin();
  }
  else {
    this.store.peek();
  }
}

const stack = new SortedStack();
const arr = [1, 4, 2, 3, 7, 8];
arr.forEach(num => {
  stack.push(num);
  console.log("");
  console.log("STORE", JSON.stringify(stack.store.store, null, 4));
  console.log("TEMP", JSON.stringify(stack.temp.store, null, 4));
})
