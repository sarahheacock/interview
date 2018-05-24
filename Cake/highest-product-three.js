// array of integers, highest product of three
// [-2, -2, 1, 1] -> 4

// iterate through the array and two lowest nums and three highest
// start with two empty arrays in increasing order,
// if array is correct length, shift in number if appropiate
// if array is incorrect, splice in number where appropiate

// but could also sort and compare two lowest with two highest

function highestOfThree(arr) {
  arr.sort((a, b) => {
    return a - b;
  })
  const last = arr.length - 1;
  return Math.max(arr[0]*arr[1], arr[last-2]*arr[last-1]) * arr[last];
}

console.log(highestOfThree([-2, -2, 1, 1]));
