// compute point of intersection
function slope(line) {
  return (line[0].y - line[1].y) / (line[0].x - line[1].x)
}

function findYint(point, slope) {
  return point.y - slope * point.x;
}

function findInt(slope1, slope2, yint1, yint2){
  const x = (yint2 - yint1) / (slope1 - slope2);
  const y = slope1 * x + yint1;
  return {
    x, y
  }
}

function inRange(x, line){
  const min = Math.min(line[0].x, line[1].x);
  const max = Math.max(line[0].x, line[1].x);

  return x <= max && x >= min;
}

function intersection(line1, line2){
  // find intersection with slopes of the lines
  const slope1 = slope(line1);
  const slope2 = slope(line2);

  if(slope1 === slope2){
    return undefined;
  }

  // find y intercept
  const yint1 = findYint(line1[0], slope1);
  const yint2 = findYint(line2[0], slope2);

  // find x and y
  const intercept = findInt(slope1, slope2, yint1, yint2)

  // then determine if intersection is within range
  return (inRange(intercept.x, line1) && inRange(intercept.x, line2)) ? intercept: undefined;
}

const line1 = [
  {x: -1, y: -1},
  {x: 3, y: 3}
]

const line2 = [
  {x: -1, y: 1},
  {x: 3, y: -3}
]

console.log(intersection(line1, line2))
