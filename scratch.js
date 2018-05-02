function helper(arr){
  arr.push(4); // mutates directly
  arr = [4, 5, 6]; // only changes local reference
}

function scratch(){
  let arr = [1, 2, 3];
  helper(arr);
  return arr;
}
console.log(scratch()); // print [ 1, 2, 3, 4 ]

function createCopy(arr){
  // return arr;
  return [...arr];
}

function shallow(){
  const arr = [1, 2, 3];
  const copy = createCopy(arr);
  copy[0] = 4;

  return {
    old: arr,
    new: copy
  }
}
console.log(shallow());

function immutable(){
  let str = 'a'; // const does not work because string is immutable type
  str += 'b';
  return str;
}
console.log(immutable());
