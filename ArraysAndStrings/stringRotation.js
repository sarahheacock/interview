// given two strings, check s2 is rotation of s1
// using only one call to isSubstring

function isSubstring(word, sub){
  return word.includes(sub);
}

function isRotation(s1, s2){
  if(s1.length !== s2.length){
    return false;
  }

  return isSubstring(s2 + s2, s1);
}

console.log(isRotation('puppy', 'ppypu'), true);
console.log(isRotation('puppy', 'ppyp'), false);
