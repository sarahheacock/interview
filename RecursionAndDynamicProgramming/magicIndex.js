// in A[0...n-1] is index where A[i] = i
// array is distinct and sorted

// if every integer is different, there will be a point
// need to find point between A[i] < i && A[i] > i
function magic(arr, top, bottom){
  if(typeof top === 'undefined'){
    top = 0;
    bottom = arr.length - 1;
    if(arr[0] === 0){
      return 0
    }
  }

  const midIndex = Math.ceil((bottom - top)/2);
  if(midIndex < 0 || midIndex >= arr.length || bottom <= top){
    return;
  }

  const mid = arr[midIndex];
  if(mid === midIndex){
    return midIndex;
  }
  if(midIndex < mid){
    return magic(arr, top, Math.min(mid, midIndex - 1))
  }
  return magic(arr, Math.max(mid, midIndex + 1), bottom)
}

console.log(magic([-10, -5, 2, 2, 2, 3, 4, 7, 9, 12, 13]))
