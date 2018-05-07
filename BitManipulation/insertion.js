// given two 32-bit numbers, insert M into N so that M starts at bit
// j and ends at bit i

function insertion(N, M, i, j){
  // clear out digits between i and j with N
  // const space = Math.floor(Math.log2(N));
  // let left = ((1 << space + 1) - 1) ^ ;
  // return left.toString(2)

  let buffer = 0;
  let val = Math.pow(2, j - i - buffer);
  while(buffer < j - i){
    buffer++;
    val |= Math.pow(2, j - i - buffer);
  }

  val = ~(val << i);

  let masked = val & N;

  // compare new N and M shifted
  let result = masked | (M << i)
  return result.toString(2);
}

const N = parseInt('11000000001', 2);
// const N = parseInt('11111111111', 2);
const M = parseInt('10011', 2);
console.log(insertion(N, M, 2, 6))
