function win(player, arr){
  return arr.reduce((bool, mark) => {
    return bool && mark === player;
  }, true)
}

function board(n){
  const record = [...new Array(n)].map(i => {
    return [...new Array(n)].map(j => '_')
  });

  return function(player, row, col){
    record[row][col] = player;
    const rowWin = win(player, record[row]);
    const colWin = win(player, record.map(r => r[col]));
    const diagOne = win(player, record.map((r, i) => r[i]));
    const diagTwo = win(player, record.map((r, i) => r[n - i - 1]));
    const result = rowWin || colWin || diagOne || diagTwo;
    console.log(result);
    return result;
  }
}

const myGame = board(4);
myGame('X', 0, 0)
// myGame('X', 1, 1)
// myGame('X', 2, 2)

// myGame('X', 0, 1)
// myGame('X', 0, 2)

myGame('X', 1, 0)
myGame('X', 2, 0)
myGame('X', 3, 0)
