//https://leetcode.com/problems/subarray-sum-equals-k/submissions/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

    let sum = 0;
    let runningTotal = 0;

    //sliding window?
    //kinda inefficient

    for (let l = 0; l<nums.length; l++){
        runningTotal = nums[l];
        if (runningTotal == k){
                sum++;
            }
        for (let r = l+1; r<nums.length; r++){
            runningTotal += nums[r];
            if (runningTotal == k){
                sum++;
            }
        }
    }


    return sum;
};
