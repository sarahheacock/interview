// check if one word is permutation of another

// (1) sort the strings and then compare O(n log(n) + n)

// (2) keep track of characters count then compare objects

function createObj(str, start, num){
  return str.split('').reduce((obj, char) => {
    if(obj[char]){
      obj[char] += num;
    }
    else {
      obj[char] = num;
    }

    if(obj[char] === 0){
      delete obj[char];
    }
    return start;
  }, start);
}

function checkPerm(str1, str2){
  const record = createObj(str2, createObj(str1, {}, 1), -1);
  return Object.keys(record).length === 0;
}

console.log(checkPerm("perm", "perms"));
console.log(checkPerm("perms", "perm"));
console.log(checkPerm("cat", "act"))
