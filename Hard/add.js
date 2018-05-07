// write a funcion that adds two numbers without plus
function add(numOne, numTwo){
  while(numTwo){
    const total = numOne ^ numTwo;
    const carry = (numOne & numTwo) << 1;
    numOne = total;
    numTwo = carry;
  }

  return numOne;
}

console.log(add(5, 3));
