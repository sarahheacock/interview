// rotate NxN matrix 90 degrees
function rotate(matrix, first){
  const last = matrix.length - 1 - first;
  const temp = matrix[first].slice(first);


  for(let i = first; i < last; i++){
    matrix[first][last - i + first] = matrix[i][first]; // top
    matrix[i][first] = matrix[last][i]; // left
    matrix[last][i] = matrix[last - i + first][last]; // bottom
    matrix[last - i + first][last] = temp[temp.length - 1 - i]; // right
  }
}

function rotateMatrix(matrix){
  for(let i = 0; i < Math.floor(matrix.length / 2); i++){
    rotate(matrix, i);
  }

  return matrix;
}

console.log(rotateMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))

console.log(rotateMatrix([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]))

console.log(rotateMatrix([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]))
