// generate list of primes
// all non-prime numbers are divisible by prime number(s)
// start off with list of numbers

// eliminate prime multiples starting with prime * prime
// because prime * k (where k < prime) has already been taken care of
function crossoff(flags, prime){
  for(let i = prime * prime; i < flags.length; i += prime){
    flags[i] = false;
  }
}

// find the next number that has not been eliminated
function getNextPrime(flags, prime){
  let next = prime + 1;
  while(next < flags.length){
    if(flags[next]){
      return next;
    }
    next++;
  }
}

function eratosthenes(max){
  const flags = new Array(max + 1);

  flags[0] = false;
  for(let i = 1; i < flags.length; i++){
    flags[i] = true;
  }

  let prime = 2;
  while(prime <= Math.sqrt(max)){
    crossoff(flags, prime);
    prime = getNextPrime(flags, prime);
  }

  return flags.reduce((arr, bool, i) => {
    if(bool) arr.push(i);
    return arr;
  }, [])
}

console.log(eratosthenes(16));
