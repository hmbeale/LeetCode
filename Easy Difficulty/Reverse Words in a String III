/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    let res = '';
    let subStr = '';


    for (i = 0; i<s.length; i++){

        subStr += s.charAt (i);

        //there is a whitespace
        //reverse accrued substring and
        //add to res
        //reset subStr
        if (s.charAt (i) == " "){
            for (j = subStr.length; j >=0; j--){
                res += subStr.charAt(j);
            }
            subStr = "";
        }

        if (i == s.length-1){
            res += " ";
            for (j = subStr.length; j >=0; j--){
                res += subStr.charAt(j);
            }
        }
    }

    res = res.slice (1,res.length);

    return res;


};
