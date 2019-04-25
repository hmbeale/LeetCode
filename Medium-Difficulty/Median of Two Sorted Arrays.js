//https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    //concat and sort then median
  //dumb solution
  let bigArr = nums1.concat(nums2);
  bigArr.sort(function(a, b) {
    return a - b;
  });

  //odd bigarr
  if (bigArr.length % 2 != 0) {
    const middle = Math.round(bigArr.length / 2) - 1;
    //console.log(bigArr);
    return bigArr[middle];
  }

  //even bigArr
  if (bigArr.length % 2 == 0) {
    const leftMiddle = bigArr.length / 2 - 1;
    const rightMiddle = bigArr.length / 2;
    //console.log(bigArr);
    //console.log(leftMiddle, rightMiddle);
    const middle = (bigArr[leftMiddle] + bigArr[rightMiddle]) / 2;
    return middle;
  }

  /*

  //without concat and sort
  //traverse from left to right alternating between arrays
  //middle found because we know the length of the two arrays
  //probably too slow
  const totalArrLengths = nums1.length + nums2.length;
  const middleTotalArr = totalArrLengths / 2;

  //continue along one
  //this works for odd only
  let cursor = 0;

  if (totalArrLengths % 2 != 0) {
    for (let i = 0; i < totalArrLengths - 2; i++) {
      if (nums1[i] <= nums2[i]) {
        cursor = nums1[i];
      }
      if (nums2[i] < nums1[i]) {
        cursor = nums2[i];
      }
    }
  }

  //even
  if (totalArrLengths % 2 == 0) {
     let index = 0;
    for (let i = 0; i < totalArrLengths - 2; i++) {
      if (nums1[i] <= nums2[i]) {
        cursor = nums1[i];
      }
      if (nums2[i] < nums1[i]) {
        cursor = nums2[i];
      }
        index = i;
    }


    cursor;
  }

  return cursor;
  */
};
