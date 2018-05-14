const Stack = require('./Stack.js');

function MyQueue(){
  this.stackOne = new Stack();
  this.stackTwo = new Stack();
}

MyQueue.prototype.add = function(val){
  while(!this.stackTwo.isEmpty()){
    const popped = this.stackTwo.pop();
    this.stackOne.push(popped);
  }
  this.stackOne.push(val);
}

MyQueue.prototype.remove = function(){
  while(!this.stackOne.isEmpty()){
    const popped = this.stackOne.pop();
    this.stackTwo.push(popped);
  }
  return this.stackTwo.pop();
}
