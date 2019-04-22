//https://leetcode.com/problems/find-common-characters/submissions/

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let response = [];


    //iterate through A[0]
    //see if A[0].charAt(0) is in A[1]
    // in A[2]?
    //if it's in all, great
    //remove A[0].charAt(0) from all strings

    //replace only replace first occurence, so we can use it!

    //removes one char from all elements in str arr except the first element
    const multiRemove = (arr, char) =>{
        for (let i = 1; i<arr.length; i++){
            arr[i] = arr[i].replace(char, '');
        }
        return arr;
    }

    //i iterates through A[0]
    //j iterates through A
    for (let i = 0; i<A[0].length; i++){
        for (let j = 1; j<A.length; j++){
            const curChar = A[0].charAt(i)

            if (!A[j].includes(curChar)){
                //not a duplicate
                break;
            }

            if (j == A.length-1){
                //duplicate
                //great
                response.push(curChar);

                //remove one of that character from each string in A!
                A = multiRemove(A, curChar);
            }
        }
    }

        return response;

};
