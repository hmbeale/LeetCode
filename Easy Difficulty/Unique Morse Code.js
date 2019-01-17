//https://leetcode.com/problems/unique-morse-code-words/

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    //tempStr is morse
    let tempStr = "";
    let transforms = [];

    //transform the word into morse
    //see if the word is already in transforms
    //if it's not, add to array
    //return length of array

    //i iterates words
    //j iterates strings in words
    for (i = 0; i<words.length; i++){
        for (j = 0; j<words[i].length; j++){
            const index = words[i].charCodeAt(j) -97;
            tempStr += morse[index];
        }

        //see if the morse string is in the array
        if (transforms.length == 0){
            transforms.push(tempStr);
        }

        for (j = 0; j<transforms.length; j++){
            if (tempStr == transforms[j]){
                break;
            }
            if (j == transforms.length-1){
                transforms.push(tempStr);
            }
        }

        tempStr = "";
    }

    return transforms.length;
};
