// reduce number of times we call function
// detect clusters of events and reduce calls
// if an event happens within the wait of previous event

function throttle(wait, onLast, onFirst, interval, timestamps){
  const result = [];

  function push(obj){
    if(onFirst){
      result.push(obj.start);
    }
    if(interval){
      const end = (onLast) ? obj.end: obj.end - wait;
      for(let i = obj.start + interval; i < end; i += interval){
        result.push(i);
      }
    }
    if(onLast){
      result.push(obj.end);
    }
  }

  const clusters = timestamps.reduce((arr, time) => {
    const prev = arr[arr.length - 1];
    if(prev && time <= prev.end){ // within cluster
      prev.end = Math.max(time + wait, prev.end);
    }
    else {
      if(prev) push(prev)
      arr.push({
        start: time,
        end: time + wait
      })
    }
    return arr;
  }, []);

  push(clusters[clusters.length - 1])
  return result;
}

console.log(throttle(20, false, true, 0, [0, 10, 20, 30]), '[0]');
console.log(throttle(20, true, false, 0, [0, 10, 20, 30]), '[50]');
console.log(throttle(20, false, true, 20, [0, 10, 20, 30]), '[0, 20]');
console.log(throttle(20, false, true, 0, [0, 10, 40]), '[0, 40]');
console.log(throttle(20, true, false, 0, [0, 10, 40]), '[30, 60]');
console.log(throttle(20, true, true, 0, [0, 10, 50]), '[0, 30, 50, 70]');
console.log(throttle(20, true, true, 10, [0, 10, 50]), '[0, 10, 20, 30, 50, 60, 70]');
