//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    let res = [-1, -1];


    //bst I guess
    //idk how many is to use this is probably enough
    const findTarget = (arr, element) => {
        let l = 0;
        let r = arr.length-1;
        let mid = -1;
        if (arr[0] == target) {return 0;}

        for (let i = 0; i<nums.length; i++){

        //try middle
        mid = Math.round((r+l)/2);


        //you hit my battleship
        if (target == nums[mid]){
           return mid;
        }

        //ought to guess higher
        if (target > nums[mid]){
            l = mid;
        }

        //ought to guess lower
        if (target < nums[mid]){
            r = mid;
        }

    }
        return false;
    }

    start = findTarget(nums, target);
    if (nums.length == 1 && nums[0] == target){return [0,0];}

    if (start){
       res[0] = start;
       res[1] = start;
    }



    //search left
    for (i = start; i>=0; i--){
        if (nums[i] == target){
            res[0] = i;
        }
        if (nums [i] != target){
            break;
        }
    }

    //search right
    for (i = start; i<nums.length; i++){
        if (nums[i] == target){
            res[1] = i;
        }
        if (nums [i] != target){
            break;
        }
    }

    return res;
};
