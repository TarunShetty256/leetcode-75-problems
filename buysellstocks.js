/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minPrice = Infinity;  // smallest price seen
    let maxProfit = 0;        // best profit found

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;   // better buying price found
        } else {
            let profit = price - minPrice;
            maxProfit = Math.max(maxProfit, profit);
        }
    }

    return maxProfit;
 }
