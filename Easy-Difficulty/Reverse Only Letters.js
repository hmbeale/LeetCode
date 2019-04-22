/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {

    //if it's a letter, swap
    //continue to middle
    //odd and even inputs?

    //closing window

    S = S.split("");
    let tmpStr = '';

    const isLetter = (x) => {
        if ((x.charCodeAt(0) >= 65 && x.charCodeAt(0) <=90) ||
            (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <=122)
           ){
            return true;
        }
        else{return false;}
    }

    let i = 0;
    let j = S.length-1;
        //i should increase if i is -1 (not a letter) or if there's a match
        //j should decrease if j is -1 (not a letter) of if there's a match

mainloop:
    while (i<j){

        while (!isLetter(S[i])){
            i++;
            if (i>=j){break mainloop;}
        }

        while (!isLetter(S[j])){
            j--;
        }

        //swap
            tmpStr = S[i];
            S[i] = S[j];
            S[j] = tmpStr;
            i++;
            j--;
    }

    S = S.join("");
    return S;

};
