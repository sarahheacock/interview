const { cycle } = require('./graph.js');
// nodes: { '0': [ 1 ], '1': [ 2 ], '2': [ 0, 3 ], '3': [ 2 ] } }

function breadth(graph, start, end){
  const visited = {
    left: new Set(),
    right: new Set()
  };

  function go(vals, key){
    if(!vals.length) return false;
    const arr = new Set();

    for(let i = 0; i < vals.length; i++){
      const other = (key === "left") ? "right": "left";
      const val = vals[i];
      if(visited[other].has(val)){
        return true;
      }
      else {
        visited[key].add(val);
        if(graph.nodes[val]){
          graph.nodes[val].forEach(v => {
            arr.add(v);
          })
        }
      }
    }

    return [...arr];
  }

  function iterate(left, right){
    const l = go(left, "left");
    const r = go(right, "right");

    if(typeof l === "boolean"){
      return l;
    }
    if(typeof r === "boolean"){
      return r;
    }

    return iterate(l, r);
  }

  return iterate(graph.nodes[start], graph.nodes[end])
}

console.log(breadth(cycle, 1, 5))
