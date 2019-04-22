//https://leetcode.com/problems/binary-number-with-alternating-bits/

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {

    //shift one then XOR then check xor for all 1s?

    let XORRight = ((n ^ (n >> 1)).toString(2));

    for (let i = 0; i<XORRight.length; i++){
        if (XORRight.charAt(i) == '0'){
            return false;
        }
    }

    return true;

};
