//https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {



    //nums sort low to high
    //whatever is in the middle is the majority element

    nums.sort(function(a, b) {
  return a - b;
});

    const middleIndex = Math.round(nums.length/2)-1;
    return nums[middleIndex];

    //kinda slow



    /*

    //keep count of characters
    //
    //if any count exceeds n/2 return that value

    if(nums.length == 1){return nums[0];}

    let charCount = {};

    for (let i = 0; i<nums.length; i++){

        if (charCount[nums[i]] || charCount[nums[i]] == 0){
            charCount[nums[i]] = charCount[nums[i]] + 1;
        }

        if (!charCount[nums[i]]){
          charCount[nums[i]] = 0;
        }
    }

    //const res = Math.max(...charCount)
    //console.log(charCount);

    const maxValKey = obj => {
         for(key in obj){
        if(obj[key] >= Math.round(nums.length / 2)){
            return parseInt(key);
        }
    }
    }

    console.log(charCount);
    //we want the index location, not the count
    const res = maxValKey(charCount);

    return res;

    //I tried array at first but that's too slow
    //gotta use object
    */
};
