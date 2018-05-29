// shifts 1 over i bits
// OR will change all values except bit i

function setBit(num, i){
  return num | (1 << i)
}

console.log(setBit(8, 3)); // 1000 -> 8
console.log(setBit(8, 2)); // 1100 -> 12
console.log(setBit(8, 1)); // 1010 -> 10
console.log(setBit(8, 0)); // 1001 -> 9
