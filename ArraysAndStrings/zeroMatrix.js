// algorithm such that if element in M x N matrix is zero
// column and row is set to zero

function zero(matrix){
  const rows = {};
  const cols = {};

  // find row and columns with zero
  for(let row = 0; row < matrix.length; row++){
    for(let col = 0; col < matrix[0].length; col++){
      const num = matrix[row][col];
      if(!num){
        rows[row] = true;
        cols[col] = true;
      }
    }
  }

  Object.keys(rows).forEach(row => {
    const index = parseInt(row, 10);
    matrix[index].forEach((num, i) => {
      matrix[index][i] = 0;
    })
  });

  Object.keys(cols).forEach(col => {
    const index = parseInt(col, 10);
    for(let i = 0; i < matrix.length; i++){
      matrix[i][index] = 0;
    }
  });

  return matrix;
}

console.log(zero([
  [1, 2, 3],
  [0, 0, 4],
  [5, 6, 7],
  [8, 9, 10]
]))
