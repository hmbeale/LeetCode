//https://leetcode.com/problems/shortest-unsorted-continuous-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {

    //sort
    //compare to sort
    //move in from both sides?

    //might not even need to sort

    if (nums.length < 1){
        return 0;
    }

    let sorted = nums.slice();

    sorted.sort((a, b) => a-b);

    //left and right indexes of the unsorted subarray
    l = 0;
    r = 0;

    //left to right
    for (let i = 0; i< sorted.length; i++){
        if (nums[i] != sorted[i]){
            l = i;
            break;
        }
    }

    //right to left
    for (let i = nums.length -1; i>=0; i--){
        if (nums[i] != sorted[i]){
            r = i + 1;
            break;
        }
    }


    return r-l;
};
