//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let res = 0;

    //find the difference between a given element and the largest element to its right
    //find the largest increase

    for (let i = 0; i<prices.length; i++){
        let sub = prices.slice(i, prices.length);
        let max = Math.max(...sub);
        let dif = max - prices[i];

        console.log(max, dif);

        if (dif > res) res = dif;

    }

    return res;

};
