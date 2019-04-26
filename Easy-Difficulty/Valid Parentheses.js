/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let chars = s.split("");

  //loop through and remove parentheses
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] == "(" && chars[i + 1] == ")") {
      chars.splice(i, 2);
      i = i - 2;
    }

    if (chars[i] == "{" && chars[i + 1] == "}") {
      chars.splice(i, 2);
      i = i - 2;
    }
    if (chars[i] == "[" && chars[i + 1] == "]") {
      chars.splice(i, 2);
      i = i - 2;
    }
  }

  if (chars.length > 0) {
    return false;
  }

  return true;
};
