// create a number like 11101111
// perform AND with num to clear ith bit
function clearBit(num, i){
  return num & ~(1 << i);
}

// create i 1s -> 0111
// clear bits except last i
function clearFirstBits(num, i){
  return num & ((1 << i) - 1)
}

// clear last bits -> 1100
function clearLastBits(num, i){
  return num & (-1 << (i + 1))
}

// 1110
console.log(clearBit(14, 2)); // 1010 -> 10
console.log(clearFirstBits(14, 2)); // 0010 -> 2
console.log(clearLastBits(14, 2)); // 1000 -> 8
