// string compression using counts of repeated characters
// if not smaller, return original string

function compression(str){
  const arr = [];

  for(let i = 0; i < str.length; ){
    let count = 1;
    const char = str[i];
    i++;

    while(str[i] === char){
      i++;
      count++;
    }

    arr.push(char + count);
  }

  return (arr.length < str.length) ? arr.join(''): str;
}

console.log(compression('aabcccccaaa'), 'a2b1c5a3');
