// list of people with their birth and death years
// find the year with the most people alive
// people were born between 1900 and 2000

// function living(ppl){
//   const arr = new Array(101);
//   arr.fill(0);
//   let max = 0;
//
//   const buffer = 1900;
//   ppl.forEach(person => {
//     for(let i = person.birth - buffer; i <= person.death - buffer; i++){
//       arr[i]++;
//       max = (arr[i] > arr[max]) ? i: max;
//     }
//   })
//
//   return buffer + max;
// }
function create(ppl, key){
  ppl.sort((a, b) => {
    return a[key] - b[key];
  })

  // create birth years
  // for every year record number of people born
  const years = [];
  const total = [];
  let count = 0;

  ppl.forEach(person => {
    count++;
    if(years.length && person[key] === years[years.length - 1]){
      total[ppl.length - 1] = count;
    }
    else {
      years.push(person[key]);
      total.push(count);
    }
  })

  return {
    years,
    total
  }
}

function living(ppl){
  // for every year record number of people died
  const b = create(ppl, 'birth');
  const birthYears = b.years;
  const births = b.total;

  const d = create(ppl, 'death');
  const deathYears = d.years;
  const deaths = d.total;

  let max = 0;
  let deathIndex = deaths.length - 2;
  let birthIndex = births.length - 1;

  while(birthIndex > -1 && deathIndex > -1){
    if(deathYears[deathIndex] > birthYears[birthIndex]){
      birthIndex--;
    }
    else {
      births[birthIndex] -= deaths[deathIndex];
      max = (births[max] > births[birthIndex]) ? max: birthIndex;
      deathIndex--;
    }
  }

  return birthYears[max];
}

const ppl = [
  {birth: 1908, death: 1909},
  {birth: 1910, death: 1950},
  {birth: 1950, death: 1960}
]
console.log(living(ppl))
