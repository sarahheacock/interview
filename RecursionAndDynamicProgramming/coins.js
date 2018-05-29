function coins(n){
  const currency = [25, 10, 5, 1];

  let remaining = n;
  const myCase = currency.map((coin) => {
    const amount = Math.floor(remaining/coin);
    remaining -= (amount*coin);
    return amount;
  })

  let count = 1;

  while(myCase[currency.length - 1] !== n){
    let j = currency.length - 2;
    while(j && !myCase[j]){
      j--;
    }
    myCase[j] -= 1;

    let remaining = currency[j];
    j++;
    while(j < myCase.length){
      while(remaining >= currency[j]){
        remaining -= currency[j];
        myCase[j] += 1;
      }
      j++;
    }
    count++;
  }

  return count;
}


console.log(coins(25))
