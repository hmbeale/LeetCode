//https://leetcode.com/problems/arithmetic-slices/

/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {

    let res = 0;

    //make an array of differences?
    //awkward

    for (let i = 1; i<A.length; i++){
        for (let j = i+1; j<A.length; j++){
            if (A[j] - A[i] == A[j-1] - A[i-1]){
                res++;
            }else{
                break;
            }
        }
    }

    return res;

};
