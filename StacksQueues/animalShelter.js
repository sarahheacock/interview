function Node(val){
  this.type = val;
  this.next = null;
}

function Shelter(){
  this.head = null;
  this.tail = null;
}

Shelter.prototype.enqueue = function(type){
  const newNode = new Node(type);
  if(this.tail){
    this.tail.next = newNode;
  }

  this.tail = newNode;
  if(!this.head){
    this.head = newNode;
  }
}

Shelter.prototype.dequeueAny = function(){
  if(!this.head){
    return;
  }
  if(this.head === this.tail){
    const head = this.head;
    this.head = null;
    this.tail = null;
    return head;
  }

  this.head = this.head.next;
}

Shelter.prototype.remove = function(type){
  let prev = this.head;
  if(!prev){
    return;
  }
  if(prev.type === type){
    this.head = this.head.next;
    return prev;
  }
  let curr = prev.next;

  while(curr){
    if(curr.type === type){
      const animal = curr;
      prev.next = curr.next;
      return animal;
    }

    prev = prev.next;
    curr = curr.next;
  }
}

Shelter.prototype.dequeueCat = function(){
  return this.remove('cat');
}

Shelter.prototype.dequeueDog = function(){
  return this.remove('dog');
}

const shelter = new Shelter();
['cat', 'dog', 'dog', 'dog', 'cat', 'cat'].forEach(animal => {
  shelter.enqueue(animal);
});

shelter.dequeueAny();
console.log(JSON.stringify(shelter, null, 4));

shelter.dequeueCat();
console.log(JSON.stringify(shelter, null, 4));
