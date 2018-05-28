// brute force would be to create factorial then count zeros
function bruteForce(num){
  let fact = 1;
  for(let i = 2; i <= num; i++){
    fact *= i;
  }
  //console.log(fact);

  let result = 0;
  const nums = fact.toString();
  for(let i = nums.length - 1; i >= 0 && nums[i] === '0'; i--){
    result++;
  }

  return result;
}

console.log(bruteForce(7))
console.log(bruteForce(20))
// console.log(bruteForce(30))

function countZeroes(num){
  // return Math.floor(num / 5)
  let count = 0;
  let limit = 5;

  while(limit <= num){
    limit += 5;
    count++;
  }
  return count;
}

console.log(countZeroes(7));
console.log(countZeroes(20));
