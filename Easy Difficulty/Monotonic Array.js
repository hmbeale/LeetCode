//https://leetcode.com/problems/monotonic-array/

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {

    let monoIncrease = false;
    let monoDecrease = false;

    //check for increasing
    for (i = 0; i<A.length; i++){
        //not increasing
        if (A[i]> A[i+1]){
            break;
        }
        if (i == A.length-1){
            monoIncrease = true;
        }
    }

    //check for decreasing
    if (!monoIncrease){
        for (i = 0; i<A.length; i++){
        //not decreasing
            if (A[i]< A[i+1]){
                break;
            }
            if (i == A.length-1){
                monoDecrease = true;
            }
      }
    }

    return (monoIncrease || monoDecrease);

};
