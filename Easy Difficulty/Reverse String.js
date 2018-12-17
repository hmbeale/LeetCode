/*
Write a function that takes a string as input and returns the string reversed.

https://leetcode.com/problems/reverse-string/

*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {

    let res = '';

    for (i = s.length; i>=0; i--){
        res += s.charAt(i);
    }

    return res;

};
