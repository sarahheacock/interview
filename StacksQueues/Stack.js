function Stack() {
  this.store = {};
  this.length = 0;
  this.min = {};
}

Stack.prototype.push = function(val){
  this.min[this.length] = (this.length === 0 || val < this.min[this.length - 1]) ? val: this.min[this.length - 1];
  this.store[this.length] = val;
  this.length++;
}

Stack.prototype.pop = function(){
  this.length--;
  const temp = this.store[this.length];
  delete this.store[this.length];
  delete this.min[this.length];
  return temp;
}

Stack.prototype.peek = function(){
  if(this.isEmpty()){
    return;
  }
  return this.store[this.length - 1];
}

Stack.prototype.isEmpty = function(){
  return this.length === 0;
}

Stack.prototype.getMin = function(){
  return this.min[this.length - 1];
}


module.exports = Stack;
