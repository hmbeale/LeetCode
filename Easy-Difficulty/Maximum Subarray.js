//https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {


    let sum = nums[0];

    let runningTotal = 0;

    const updateSum = (int) => {
        if (int > sum){
            sum = int;
        }
    }

    //sliding window
    for (let l = 0; l<nums.length; l++){
         runningTotal = nums[l];
         updateSum(runningTotal);

        for (let r = l+1; r<nums.length; r++){
            runningTotal += nums[r];
            updateSum(runningTotal);
        }

    }

    return sum;


};
