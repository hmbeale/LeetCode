//https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/submissions/

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    
    arr = S.split('');
    
    for (let i = 0; i<arr.length; i++){
        if (arr.length == 0){
            break;
        }
        if (arr[i] == arr[i+1]){
            //remove both
            arr.splice(i, 2);
            i = i - 2;
        }
    }
    
    arr = arr.join('');
    return arr;
    
};