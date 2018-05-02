// could also just iterate through rather than creating hash
// in order to save space

// function createObj(str, start, num){
//   return str.split('').reduce((obj, char) => {
//     if(obj[char]){
//       obj[char] += num;
//     }
//     else {
//       obj[char] = num;
//     }
//
//     if(obj[char] === 0){
//       delete obj[char];
//     }
//     return start;
//   }, start);
// }
//
// function oneAway(str1, str2){
//   const record = createObj(str2, createObj(str1, {}, 1), -1);
//   const letters = Object.keys(record);
//
//   if(letters.length === 1){
//     const char = record[letters[0]];
//     if(char === 1){
//       return 'remove';
//     }
//     if(char === -1){
//       return 'insert';
//     }
//   }
//
//   if(letters.length === 2){
//     const charOne = record[letters[0]];
//     const charTwo = record[letters[1]];
//
//     if((charOne === 1 && charTwo === -1) || (charOne === -1 && charTwo === 1)){
//       return 'replace';
//     }
//   }
//
//   return 'false';
// }
function checkReplace(str1, str2){
  let count = 0;
  for(let i = 0; i < str1.length; i++){
    if(str1[i] !== str2[i]){
      count++;
    }
  }
  return (count === 1) ? 'replace': false;
}

function checkInsert(str1, str2, word){
  // str1 is longer
  let count = 0;
  let j = 0;

  for(let i = 0; i < str1.length; i++){
    if(str1[j] !== str2[i]){
      count++;
      j++;
    }
    j++;
  }

  return (count === 1) ? word: false;
}

function oneAway(str1, str2){
  if(str1.length === str2.length){
    return checkReplace(str1, str2);
  }

  if(str1.length === str2.length + 1){
    return checkInsert(str1, str2, 'remove');
  }

  if(str1.length + 1 === str2.length){
    return checkInsert(str2, str1, 'insert');
  }

  return false;
}

console.log(oneAway('pale', 'ple'), 'remove');
console.log(oneAway('pales', 'pale'), 'insert');
console.log(oneAway('pale', 'bale'), 'replace');
console.log(oneAway('pale', 'bake'), 'false');
