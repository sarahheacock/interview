// shift 1 over by i bits -> 00010000
// AND num with shifted 1 clearing all bits except one at i

function getBit(num, i){
  return (num & (1 << i)) !== 0
}

// 1000
console.log(getBit(8, 3));
console.log(getBit(8, 2));
console.log(getBit(8, 1));
console.log(getBit(8, 0));
