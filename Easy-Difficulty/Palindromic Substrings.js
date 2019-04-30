//https://leetcode.com/problems/palindromic-substrings/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {

    //iterate s
    //expand outward and search for palindromes at each index
    //remember that single characters are technically palindromes

    //palindromes can be even or odd in length

    let count = 0;

    chars = s.split('');

    //start and middle and expand outward
    //for each match, add to response
    const oddPalSearch = (arr, index) => {
        let count = 0;
        let l = index - 1;
        let r = index + 1;
        let temp = [arr[l], arr[index], arr[r]];

        while (l>= 0 && r < arr.length){
            if (arr[l] == arr[r]){
                count++;
            }
            if (arr[l] != arr[r]){
                break;
            }

            l--;
            r++;

        }
        return count;
    }

    const evenPalSearch = (arr, index) => {
        let count = 0;
        let l = index;
        let r = index + 1;
        let temp = [arr[l], arr[r]]

        //while within the array
        while (l>= 0 && r < arr.length){

            if (arr[l] == arr[r]){
                count++;

            }
            if (arr[l] != arr[r]){
                break;
            }

            l--;
            r++;

        }
        return count;

    }

    for (let i = 0; i<chars.length; i++){
        //all single characters are palindromes
        //response.push(chars[i]);
        count++;

        //check for odd palindrome
        if (chars[i-1] == chars[i+1]){
            //response = response.concat(oddPalSearch(chars, i));
            count = count + oddPalSearch(chars, i);
        }

        //check for even palindrome
        if (chars[i] == chars[i+1]){
            //response = response.concat(evenPalSearch(chars, i));
            count = count + evenPalSearch(chars, i);

        }

    }


    return count;

};
