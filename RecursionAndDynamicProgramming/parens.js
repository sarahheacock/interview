// print all valid opened and closed combinations of n parentheses
function perm(left, right, curr, count, record){
  if(!left && !right){
    record.push(curr.join(''))
    return;
  }

  if(left){
    perm(left - 1, right, [...curr, '('], count + 1, record);
  }
  if(right && count >= 1){
    perm(left, right - 1, [...curr, ')'], count - 1, record);
  }
}

function bruteForce(n){
  const record = [];
  perm(n, n, [], 0, record);
  return record;
}

console.log(bruteForce(3))
