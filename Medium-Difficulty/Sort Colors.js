//https://leetcode.com/problems/sort-colors/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    //single pass might be as you go remove 0s and put them at beginning
    //same with 2s but ad to end

    let zeroes = 0;
    let twos = 0;

    for (let i = 0; i< nums.length; i++){
        if (nums[i] == 0){
            //todo
            nums.splice(i, 1);
            zeroes++;
            i--;
        }
        if (nums[i] == 2){
            //todo
            nums.splice(i, 1);
            twos++;
            i--;
        }
    }

    for (let i = 0; i<zeroes; i++){
        nums.unshift(0);
    }


    for (let i = 0; i<twos; i++){
        nums.push(2);
    }

    return nums;

};
