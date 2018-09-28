/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];

    //for i, see if there are any two which equal its opposite
    //if there are, that's a set
    //if the set doesn't already exist, add it to res

    for (let i = 0; i<nums.length; i++){
        for (let j = i+1; j<nums.length; j++){
            for (let k = j+1; k<nums.length; k++){
                if (nums[j] + nums [k] == -1 * nums[i]){
                    //set exists
                    let dup = false;

                    //test to see if already in res
                    for (let l = 0; l<res.length; l++){
                        if (res[l][0] == nums[i] && res[l][1] == nums[j]
                            && res[l][2] == nums[k] ||


                            res[l][0] == nums[i] && res[l][1] == nums[k]
                            && res[l][2] == nums[j] ||


                            res[l][0] == nums[j] && res[l][1] == nums[k]
                            && res[l][2] == nums[i]||


                            res[l][0] == nums[j] && res[l][1] == nums[i]
                            && res[l][2] == nums[k] ||


                            res[l][0] == nums[k] && res[l][1] == nums[i]
                            && res[l][2] == nums[j] ||


                            res[l][0] == nums[k] && res[l][1] == nums[j]
                            && res[l][2] == nums[i]
                           ){
                            dup = true;
                            break;
                        }
                    }
                    if (!dup){res.push ([nums[i], nums[j], nums[k]])}
                }
            }
        }
    }


    return res;


    };
