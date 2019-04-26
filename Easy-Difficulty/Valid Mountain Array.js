//https://leetcode.com/problems/valid-mountain-array/submissions/

/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  const max = Math.max(...A);
  let maxIndex = -1;

  //not a mountain if array sz 0
  //must be at least size three actually
  //so peak isn't on edge
  if (A.length < 3) {
    return false;
  }

  //not a moutain if peak is on edge
  if (A[0] == max) {
    return false;
  }
  if (A[A.length - 1] == max) {
    return false;
  }

  //increases to middle
  for (let i = 0; i < A.length; i++) {
    if (A[i] == max) {
      maxIndex = i;
      break;
    }
    if (A[i] >= A[i + 1]) {
      return false;
    }
  }

  //decreases from middle
  for (let i = maxIndex; i < A.length; i++) {
    if (A[i] <= A[i + 1]) {
      return false;
    }
  }

  return true;
};
