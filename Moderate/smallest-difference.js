// find smalles difference between value from arr1 and value from arr2

// compare difference with each element
function bruteForce(arr1, arr2){
  let min = Number.POSITIVE_INFINITY;
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      min = Math.min(min, Math.abs(arr1[i] - arr2[j]))
    }
  }
  return min;
}

function mySort(arr){
  arr.sort((a, b) => {
    return a - b;
  })
}

// sort and iterate through each
function smallestDiff(arr1, arr2){
  mySort(arr1);
  mySort(arr2);

  let one = 0;
  let two = 0;
  let min = Number.POSITIVE_INFINITY;

  while(one < arr1.length && two < arr2.length){
    min = Math.min(min, Math.abs(arr1[one] - arr2[two]));
    if(arr1[one] < arr2[two]){
      one++;
    }
    else {
      two++;
    }
  }

  return min
}

//console.log(bruteForce([1, 3, 15, 11, 2], [23, 127, 235, 19, 8])) // 3
console.log(smallestDiff([1, 3, 15, 11, 2], [23, 127, 235, 19, 8]))
