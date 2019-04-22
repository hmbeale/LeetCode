/*
Given an array of numbers nums, in which exactly two elements appear only once
and all the other elements appear exactly twice. Find the two elements that
appear only once.
https://leetcode.com/problems/single-number-iii/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {

    //remove element pairs?

        for (let i = 0; i<nums.length; i++){
            for (let j = i+1; j<nums.length; j++){
                if (nums[i] == nums[j]){
                    nums.splice(i,1);
                    nums.splice(j-1,1);
                    i = 0;
                    j = 0;
                }
            }
        }
       return nums;
};
