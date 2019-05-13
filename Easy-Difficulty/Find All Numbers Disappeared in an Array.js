//https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {

    //simple solution is hash table then check hash table at end
    //but we're supposed to do 0n and no extra space

    let map = new Map();

    for (let i = 0; i<nums.length; i++){
      map.set(nums[i], true);
    }

    let missing = [];

    for (let i = 1; i<=nums.length; i++){
        if (!(map.has(i))){
            missing.push(i);
        }
    }

    return missing;

};
