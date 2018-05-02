function createObj(str, start){
  return str.split('').reduce((obj, ch) => {
    if(ch === ' '){
      return obj;
    }

    const char = ch.toLowerCase();
    if(obj[char]){
      delete obj[char];
    }
    else {
      obj[char] = true;
    }
    return obj;
  }, start);
}

function palindrome(str){
  const record = Object.keys(createObj(str, {})).length;
  return record >= -1 && record <= 1;
}

console.log(palindrome('Tact Coa'));
