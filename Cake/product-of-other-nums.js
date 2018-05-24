// return an array where num at each index,
// is the product of all nums not at that index

function productOfOtherNums(arr){
  // create product array going backwards
  // where each num is product of all nums afterwards

  // go forward through same array where we have a variable
  // containing running product of numbers before number at index
  // multiply that variable with the number at that index

  const result = new Array(arr.length);

  let product = 1;
  for(let i = arr.length - 1; i > -1; i--){
    result[i] = product;
    product *= arr[i];
  }

  product = 1;
  for(let i = 0; i < arr.length; i++){
    result[i] *= product;
    product *= arr[i];
  }

  return result;
}

console.log(productOfOtherNums([1, 7, 3, 4])) // [84, 12, 28, 21]
console.log(productOfOtherNums([1, 0, 3, 4])) // [0, 12, 0, 0]
