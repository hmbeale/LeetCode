//https://leetcode.com/problems/intersection-of-two-arrays/submissions/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

  const allIntersects = nums1.map(x => {
    if (nums2.includes(x)){
      return x;
    }
  });

  //remove duplicates
  uniqueIntersects = [...new Set(allIntersects)];

  //remove undefined
  const response = uniqueIntersects.filter(element => element != undefined);

  return response;
};
