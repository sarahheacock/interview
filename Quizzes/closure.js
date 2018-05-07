function counter(){
  let count = 0;
  return function(){
    count++;
    console.log(count);
    return count;
  }
}

const count = counter();
count();
count();
count();
