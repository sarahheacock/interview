// set ith bit to value v
function updateBit(num, i, v){
  return (num & ~(1 << i)) | v << i;
}

// 1110
console.log(updateBit(14, 2, 0)) // 1010 -> 10
console.log(updateBit(14, 2, 1)) // 1110 -> 14
