class Node {
  constructor(val){
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(val){
    const newNode = new Node(val);
    if(this.tail){
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;

    if(this.length === 1){
      this.head = newNode;
    }
  }

  remove(){
    if(!this.length){
      return;
    }

    let prev = this.head;
    while(prev.next !== this.tail){
      prev = prev.next;
    }
    prev.next = null;

    this.length--;
    if(!this.length){
      this.head = null;
    }
  }
}

module.exports = {
  Node: Node,
  LinkedList: LinkedList
}
