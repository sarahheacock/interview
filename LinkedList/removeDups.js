// remove duplicates from linked list

const { Node, LinkedList } = require('./linkedlist.js');

function removeDups(ll){
  const buffer = {[ll.head.value]: true};
  let prev = ll.head;
  let current = prev.next;

  while(current){
    if(buffer[current.value]){
      prev.next = current.next;
    }
    else {
      buffer[current.value] = true;
    }
    prev = current;
    current = current.next;
  }
}

const ll = new LinkedList();
const arr = [1, 3, 1, 5, 2, 1];
arr.forEach(num => {
  ll.append(num);
})

removeDups(ll);

console.log(JSON.stringify(ll, null, 4));
