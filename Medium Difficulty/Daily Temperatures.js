/*
Given a list of daily temperatures T, return a list such that, for each day in
the input, tells you how many days you would have to wait until a warmer
temperature. If there is no future day for which this is possible, put 0 instead.

https://leetcode.com/problems/daily-temperatures/ 
*/

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {


    let res = [];

    for (let i = 0; i<T.length; i++){
        for (let j = i; j<T.length; j++){
            if (T[j]>T[i]){
                res.push(j-i);
                break;
            }
            if (j == T.length-1){
                res.push(0);
                break;
            }
        }
    }


    return res;

};
