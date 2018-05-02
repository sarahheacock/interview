function Stack(){
  this.arr = {};
  this.size = 0;
}

Stack.prototype.peak = function(){
  if(!this.size){
    return null;
  }
  return this.arr[this.size - 1];
}

Stack.prototype.pop = function(){
  const popped = this.peak();
  if(popped !== null){
    this.size--;
    delete this.arr[this.size];
  }
  return popped;
}

Stack.prototype.push = function(val){
  this.arr[this.size] = val;
  this.size++;
  return val;
}


let counter = 0;

function helper(origin, buffer, dest, disk){
  function pop(){
    const popped = origin.pop();
    dest.push(popped);
    counter++;
  }

  if(disk === 1){
    // move origin to dest
    pop();
    return counter;
  }
  else {
    helper(origin, dest, buffer, disk - 1); // move disks to buffer
    pop(); // move origin to dest
    helper(buffer, origin, dest, disk - 1); // move buffer to dest
  }
}

function tower(num){
  const origin = new Stack();
  for(let i = 0; i < num; i++){
    origin.push(num - i);
  }

  // let counter = 0;
  helper(origin, new Stack(), new Stack(), num);
  return counter;
}

console.log(tower(4));
