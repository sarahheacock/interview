// class Node {
//   constructor(val){
//     this.value = val;
//     this.children = [];
//   }
// }

class Graph {
  constructor(){
    this.nodes = {}
  }

  append(parent, child){
    if(this.nodes[parent]){
      this.nodes[parent].push(child);
    }
    else {
      this.nodes[parent] = [child];
    }
  }
}

const cycle = new Graph();
const cycleArr = [[0, 1], [1, 2], [2, 0], [2, 3], [3, 2], [5, 6]];
cycleArr.forEach(arr => {
  cycle.append(...arr);
})

const tree = new Graph();
const otherArr = [[0, 1], [1, 2], [2, 4], [2, 3]];
otherArr.forEach(arr => {
  tree.append(...arr);
})

module.exports = {
  cycle: cycle,
  tree: tree
}
