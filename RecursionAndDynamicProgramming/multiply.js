// recursively multiply without *
function bruteForce(numOne, numTwo){
  let result = 0;
  const inc = Math.max(numOne, numTwo);
  const limit = Math.min(numOne, numTwo);

  for(let i = 0; i < limit; i++){
    result += inc;
  }
  return result;
}

function mult(numOne, numTwo){
  const mem = {};

  function multiply(numOne, numTwo){
    const max = Math.max(numOne, numTwo);
    const min = Math.min(numOne, numTwo);
    console.log(mem)

    if(min === 1){
      return max;
    }
    if(mem[min]){
      return mem[min];
    }

    const div = Math.floor(min >> 1);
    mem[div] = multiply(max, div);

    if(max%2 === 1){
      return mem[div] + mem[div] + multiply(max, 1);
    }
    else {
      return mem[div] + mem[div];
    }
  }

  return multiply(numOne, numTwo)
}

// 6, 4
// 8, 3
// 12, 2
// 24, 1
console.log(bruteForce(6, 4));
console.log(mult(6, 4));
