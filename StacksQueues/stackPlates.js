// implement data structure SetOfStacks
const Stack = require('./Stack.js');

function SetOfStacks(){
  this.length = 0;
  this.limit = 3;
  this.store = {};
}

SetOfStacks.prototype.push = function(val){
  if(!this.length || this.store[this.length - 1].length % this.limit === 0){
    this.store[this.length] = new Stack();
    this.length++;
  }
  this.store[this.length - 1].push(val);
}

SetOfStacks.prototype.pop = function(){
  if(!this.length){
    return;
  }

  const temp = this.store[this.length - 1].peek();
  this.store[this.length - 1].pop();

  if(this.store[this.length - 1].isEmpty()){
    this.length--;
  }

  return temp;
}

SetOfStacks.prototype.popAt = function(index){
  if(!this.store[index]){
    return;
  }
  if(index === this.length - 1){
    return this.pop();]
  }

  const temp = this.store[index].pop();
  return temp;
}

const set = new SetOfStacks();
for(let i = 0; i < 5; i++){
  set.push(i);
}
set.popAt();
set.pop();

console.log(JSON.stringify(set.store[set.length - 1]));
