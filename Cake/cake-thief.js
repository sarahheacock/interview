// find max monetary amount can steal
function maxDuffelBagValue(cakes, cap){
  const result = [];
  result.push(0);

  for(let i = 1; i <= cap; i++){
    let max = result[i - 1];
    cakes.forEach(type => {
      if(i >= type.weight){
        max = Math.max(max, result[i - type.weight] + type.value);
      }
    });
    result.push(max);
  }

  return result[cap];
}

var cakeTypes = [
  {weight: 7, value: 160},
  {weight: 3, value: 90},
  {weight: 2, value: 15},
];

var capacity = 20;

console.log(maxDuffelBagValue(cakeTypes, capacity));
