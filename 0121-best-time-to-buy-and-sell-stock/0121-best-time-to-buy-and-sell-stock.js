/**
 * @param {number[]} prices
 * @return {number}
 */

// f(n) = Math.max(f(n-1), n)

var maxProfit = function(prices) {
    let maxPrice = 0;
    let maxProfit = 0;

    for(let i = prices.length - 1; i >= 0; i--) {
        maxPrice = Math.max(prices[i], maxPrice);
        maxProfit = Math.max(maxProfit, maxPrice - prices[i]);
    }

    return maxProfit;
};
