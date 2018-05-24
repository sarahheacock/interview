// prices of stocks from yesterday
// what is the max profit

function getMaxProfit(stocks){
  // iterate through finding the min and the max profit
  // if we find a num less than min, that is the new min
  // if we find a num - min that is greater than max profit, that is new max
  let min = stocks[0];
  let max = Number.NEGATIVE_INFINITY;

  for(let i = 1; i < stocks.length; i++){
    const price = stocks[i]
    if(price - min > max){
      max = price - min;
    }
    if(price < min){
      min = price;
    }
  }

  return max;
}

const stockPricesYesterday = [10, 7, 5, 8, 11, 9]; // 6
console.log(getMaxProfit(stockPricesYesterday));
console.log(getMaxProfit([5, 4, 3, 2, 1]));
