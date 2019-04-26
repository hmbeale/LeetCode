//https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {

    //square em
    for (let i = 0; i<A.length; i++){
        A[i] = A[i] * A[i]
    }

    A.sort((a, b) => a-b);

    return A;


};
