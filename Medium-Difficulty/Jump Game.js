//https://leetcode.com/problems/jump-game/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    /*
    //move from right to left?
    const evaluateJump = (arr) => {
        let jumps = [];
        let distanceToJump = 0;
        for (let i = arr.length-1; i>=0; i--){
            if (distanceToJump<arr[i]){
                jumps.push(i);
            }

            distanceToJump++;

        }
        return jumps;
    }
    console.log(evaluateJump(nums));

    return evaluateJump(nums)
    */

   if (nums.length == 1 && nums[0] == 0){return true;}

    //oh wait we mostly just have to look out for zeroes
    //if there are any zeroes that can't be jumped over, game over
    //search for zeroes
    //evaluate jump
    const canJump = (arr, index) =>{
        let distanceToJump = 0;
        for (let i = index; i>= 0; i--){
            if (arr[i]>distanceToJump){
                return true;
            }

            if (arr[i] = distanceToJump && index == arr.length-1){
                return true;
            }
            distanceToJump++;
        }

        return false;
    }

    for (let i = 0; i<nums.length; i++){
        if (nums[i] == 0){
            if (!canJump(nums, i)){
                return false;
            }
        }
    }

    return true;

};
