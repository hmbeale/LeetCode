//https://leetcode.com/problems/fair-candy-swap/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {

    //the final size of each is the average of the two
    //need to find the difference from the average
    //then two values that can equalize that difference

    let res = [0,0];
    const SumA = A.reduce((sum, cur) => sum + cur, 0);
    const SumB = B.reduce((sum, cur) => sum + cur, 0);
    const AvgAB = (SumA + SumB)/2;
    const diff = Math.abs(SumA-AvgAB);

    if (SumA>SumB){
        for (i = 0; i<A.length; i++){
            for (j = 0; j<B.length; j++){
                if (A[i]-B[j] == diff){
                  res = [A[i], B[j]];
                  return res;
                }
            }
      }
    }

    if (SumB>SumA){
        for (i = 0; i<A.length; i++){
            for (j = 0; j<B.length; j++){
                if (B[j]-A[i] == diff){
                  res = [A[i], B[j]];
                  return res;
                }
            }
      }
    }

    //[1 2 5] [2 4], avg is 7
    //need -1, +1
    //[1 4 3 6] [1 4 3], avg is 11
    //need -3, +3
    //need a pair that are three apart?
    //swap [6 3]
    //[1 4 3 3] [1 4 6]

    return res;

};
