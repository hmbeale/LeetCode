//https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  //store count in a map
  //compare map?

  let response = [];
  let freqMap = new Map();

  //map counts number frequency
  nums.forEach(i => {
    if (freqMap.has(i)) {
      freqMap.set(i, freqMap.get(i) + 1);
    } else {
      freqMap.set(i, 1);
    }
  });

  //convert map to array so it can be sorted
  let freqArr = [];
  for (var x of freqMap) {
    freqArr.push(x);
  }

  //sort high to low
  freqArr.sort(function(x, y) {
    return y[1] - x[1];
  });

  //push top k frequency elements
  for (i = 0; i < k; i++) {
    response.push(freqArr[i][0]);
  }
  return response;
};
