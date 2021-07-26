var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    prices.forEach(price => {
        minPrice = Math.min(minPrice, price);
        const profit = price - minPrice
        maxProfit = Math.max(maxProfit, profit);
    })
    
    return maxProfit; 
};