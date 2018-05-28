// design method to find frequency of occurrences of given word
function count(book){
  const record = book.reduce((obj, word) => {
    if(obj[word]){
      obj[word] += 1;
    }
    else {
      obj[word] = 1;
    }
    return obj;
  }, {})

  return function(str){
    return record[str];
  }
}

const str = "design method to find frequency of occurrences of given word"
const myFunc = count(str.split(' '));

console.log(myFunc('method'))
