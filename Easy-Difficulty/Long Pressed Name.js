//https://leetcode.com/problems/long-pressed-name

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  //iterate at same pace until mismatch
  //continue on just typed until no consecutive duplicates
  //there may be no consecutive duplicates
  //if the mismatch is not a duplicate, return false

  //i iterates name, j iterates typed
  let i = 0;
  let j = 0;

  while (i < name.length && j < typed.length) {
    if (name.charAt(i) == typed.charAt(j)) {
      //great
      i++;
      j++;
    }

    //could be false or could be continuous duplicates
    if (name.charAt(i) != typed.charAt(j)) {
      if (typed.charAt(j) == typed.charAt(j - 1)) {
        j++;
      } else {
        return false;
      }
    }
  }

  if (i < name.length) {
    return false;
  }

  return true;
};
