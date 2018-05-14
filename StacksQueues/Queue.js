function Queue() {
  this.store = {};
  this.length = 0;
}

Queue.prototype.add = function(val) {
  this.store[this.length] = val;
  this.length++;
}

Queue.prototype.remove = function() {
  if(this.isEmpty()){
    return;
  }
  const temp = this.peek();
  this.length--;

  for(let i = 0; i < this.length; i++){
    this.store[i] = this.store[i + 1];
  }

  delete this.store[this.length];
}

Queue.prototype.peek = function() {
  if(this.isEmpty()){
    return;
  }
  return this.store[0];
}

Queue.prototype.isEmpty = function() {
  return this.length === 0;
}

const queue = new Queue();
for(let i = 0; i < 5; i++){
  queue.add(i)
}

module.exports = queue;
