// start in middle
// if word is less than the word above and below, return index
// if word is greater than first word, than step down
// if word is less than first word, than step up

function findRotation(words){
  let top = 0;
  let bottom = words.length - 1;
  let mid = Math.round((bottom-top)/2);

  while(mid > 0){
    if(words[mid - 1] > words[mid] && words[mid + 1] > words[mid]){
      break;
    }
    if(words[mid] > words[0]){
      top = mid;
    }
    else if(words[mid] < words[0]){
      bottom = mid;
    }
    mid = Math.round((bottom-top)/2) + top;
  }

  return mid;
}

const words = [
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
  'ptolemaic',
  'retrograde',
  'supplant',
];

console.log(findRotation(words));
