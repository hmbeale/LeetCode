//https://leetcode.com/problems/intersection-of-two-arrays-ii/submissions/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    //if includes
    //remove

    let response = [];

    const findElement = (arr, element) => {
        for (i = 0; i<arr.length; i++){
            if (arr[i] == element){
                return i;
            }
        }
        return false;
    }

    for (let i = 0; i<nums1.length; i++){
        intersectionIndex = findElement(nums2, nums1[i])
        if (intersectionIndex || intersectionIndex === 0){
          response.push(nums1[i]);
          nums2.splice(intersectionIndex, 1);
        }
    }

    return response;
};
