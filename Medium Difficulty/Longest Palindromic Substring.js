//Given a string s, find the longest palindromic substring in s.
//You may assume that the maximum length of s is 1000.
//https://leetcode.com/problems/longest-palindromic-substring/submissions/

//solved!

/**
 * @param {string} s
 * @return {string}
 */

//search for middle of palindromes len 2 or 3
//then expand outward
var longestPalindrome = function(s) {

  //we asume no palindrome longer than len 1 until proven otherwise
  let isMonoPal = true;
  let pal = '';
  let palLen = 0;

  //if input string is only len 1 or 0 there's no need for all this rigamarole
  if (s.length == 1 || s.length == 0){
      return s;
  }

  //search for palindromes with len 2
  for (let i = 0; i<s.length; i++){
      if (s.charAt(i) == s.charAt(i + 1)){
          //found pal len 2
          isMonoPal = false;

          //make sure pal of at least 2 recorded
          if (palLen<2){
              palLen = 2;
              pal = s.substring (i, i + 2);
          }

          //expand outward
          for (let j = 0; j<s.length; j++){
              let right = i+j+1;
              let left = i-j;
              let prevRight = right -1;
              let prevLeft = left + 1;

              //the whole gosh darn thing is an even palindrome
              if (left == 0 && right == s.length &&
                  s.charAt(left) == s.charAt(right)){
                  return s;
              }

              if (s.charAt(left) != s.charAt(right) || left<0 || right>s.length){
                  if ((prevRight + 1) - (prevLeft) > palLen){
                      //new record
                       pal = s.substring (prevLeft, prevRight +1);
                       palLen = (prevRight - prevLeft);
                       break;
                  }
                  break;
              }

          }
   }
  }

  //search for palindromes with len 3
  for (let i = 0; i<s.length; i++){

      if (s.charAt(i) == s.charAt(i + 2)){
          //found pal len 3
          isMonoPal = false;

          //make sure pal of at least 3 recorded
          if (palLen<3){
              palLen = 3;
              pal = s.substring (i, i + 3);
          }

          //expand outward
          for (let j = 0; j<s.length; j++){
              let right = i+j+2;
              let left = i-j;
              let prevRight = right -1;
              let prevLeft = left + 1;

              //the whole gosh darn thing is an odd palindrome
              if (left == 0 && right == s.length &&
                  s.charAt(left) == s.charAt(right)){
                  return s;
              }

              if (s.charAt(left) != s.charAt(right) || left<0 || right>s.length){
                  if ((prevRight + 1) - (prevLeft) > palLen){
                      //new record
                       pal = s.substring (prevLeft, prevRight +1);
                       palLen = (prevRight - prevLeft);
                       break;
                  }
                  break;
              }

          }
   }
  }

    if (isMonoPal == false){
       return pal;
   }else{
       return s.charAt(0);
   }

};
