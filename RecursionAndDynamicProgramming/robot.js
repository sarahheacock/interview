// design algorithm to find path between upper left and lower right
function createGrid(r, c) {
  return [...new Array(r)].map((v, i) => {
    const random = (i%2) ? Math.floor(Math.random() * c): -1
    return [...new Array(c)].map((v, j) => {
      return (random !== j) ? "_": "*"
    })
  })
}

function move(r, c) {

  const grid = createGrid(r, c);
  const result = [[0, 0]];
  const trap = [...new Array(r)].reduce((obj, v, i) => {
    obj[i] = {}
    return obj
  }, {})
  let i = 0;
  let j = 0;

  while(i < grid.length || j < grid[0].length){
    if(i >= grid.length || trap[i + 1][j]){
      j++;
      result.push([i, j])
    }
    else if(j >= grid[0].length || trap[i][j + 1]){
      i++;
      result.push([i, j])
    }
    else {
      if(grid[i + 1][j + 1] === "*"){
        trap[i + 1][j + 1]
        i++;
        result.push([i, j])
      }
      else {
        i++;
        result.push([i, j])
        j++;
        result.push([i, j])
      }
    }
  }

  console.log(grid)
  return result
}

console.log(move())
