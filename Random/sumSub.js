function sumSub(arr){
  // find a min that comes before max
  let max = arr[0];
  let min = 0;
  let result = 0;
  let num = 0;

  arr.forEach(int => {
    num += int;
    if(num < min){
      min = Math.min(min, num);
    }
    else {
      max = Math.max(max, num);
      result = Math.max(max - min, result);
    }
  })

  return result;
}

console.log(sumSub([5, 4, -7, 5, 3, -2]), 10);
console.log(sumSub([1, 4, -7, 5, 3]), 8);
console.log(sumSub([3, 4, -7, 5, 1]), 7); // 8
