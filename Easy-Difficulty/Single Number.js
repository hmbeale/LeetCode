//https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums.sort(function(a, b) {
    return a - b;
  });

  //nums 0 1
  //nums 1 1
  //nums 2 2
  //nums 3 2

  //nums[i] should equal i or i-1

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1] && nums[i] != nums[i - 1]) {
      return nums[i];
    }
    //first number doesn't match
    if (nums[i] != nums[i + 1] && nums[i - 1] == undefined) {
        return nums[i];
    }
    //last number doesn't match
    if (nums[i] != nums[i - 1] && nums[i + 1] == undefined) {
        return nums[i];
    }
  }

  /*
  nums.forEach(i => {
      console.log(i)

    if (nums[i] != nums[i + 1] || nums[i] != nums[i-1]){
        return i;
    }
      //first number doesn't match
      if (nums[i] != nums[i + 1] && nums[i-1] == undefined){
        return i;
    }

      if (nums[i+1]== undefined){console.log('foo')}

      //last number doesn't match
      if (nums[i] != nums[i - 1] && nums[i + 1] == undefined){
        return i;
    }

  });

    return -1;
    */
    //ah it seems I was supposed to use xor
};
