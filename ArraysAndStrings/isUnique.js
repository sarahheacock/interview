function unique(str){
  const obj = {};

  for(let i = 0; i < str.length; i++){
    const val = obj[str[i]];
    if(val){
      return false
    }
    else {
      obj[str[i]] = true;
    }
  }

  return true;
}

console.log(unique('cat'));
console.log(unique('doggie'));
