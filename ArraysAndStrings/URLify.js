// common practice to manipulate from the back
// so we do not overwrite

function url(str){
  const arr = [];

  for(let i = 0; i < str.length; i++){
    let prev = false;

    while(str[i] === ' ' && i < str.length){
      prev = true;
      i++;
    }

    if(!prev){
      arr.push(str[i]);
    }

    if(prev && arr.length && i < str.length){
      arr.push('%20');
      i--;
    }
  }

  return arr.join('');
}

console.log(url('Mr John Smith   '));
