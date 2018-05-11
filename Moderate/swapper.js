// swap a number in place without temporary variable

function swapper(numOne, numTwo){
  numOne = numOne - numTwo;
  numTwo = numTwo + numOne;
  numOne = numTwo - numOne;

  return [numOne, numTwo];
}

console.log(swapper(1, 3))
console.log(swapper(5, 3))
