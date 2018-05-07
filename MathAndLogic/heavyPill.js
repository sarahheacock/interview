// 20 bottles of pills
// 19 bottles have 1.0 g pills
// one has pills that weight 1.1 g

function pill(bottles){
  let expected = 0;
  const sum = bottles.reduce((total, bottle, i) => {
    const w = (bottle) ? 1.1: 1;
    expected += (i + 1);
    return total + (w * (i + 1));
  }, 0);


  return Math.round((sum - expected) * 10) - 1;
}

const bottles = [];
for(let i = 0; i < 20; i++){
  bottles[i] = false;
}

const r = Math.floor(Math.random() * 19);
bottles[r] = true;

console.log(r, pill(bottles));
