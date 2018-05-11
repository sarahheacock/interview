// write method to create all subsets of a set

function helper(arr, result) {
  if(!arr.length){
    return;
  }

  result.forEach((a, i) => {
    result.push([...a, arr[0]])
  })

  arr.splice(0, 1);
  helper(arr, result);
}

function power(set){
  let result = [[], [set[0]]];
  set.splice(0, 1)
  helper(set, result)

  return result;
}

console.log(power([1, 2, 3]))
