//in progress

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //test for 'nested-ness'
    //'(', ')', '{', '}', '[' and ']'

    //find valid 'middles', remove outward until no more layers
    //necessary to remove?

    let i = 0;

    while (i<s.length){
        let lmt = 0;

        if (s.substring(i, i+1) == '()' ||
            s.substring(i, i+1) == '{}' ||
            s.substring(i, i+1) == '[]'
           ){
            //valid middle, expand
            let l = i;
            let r = i+1;

            while ((l>=0) && r<s.length){

                if (s.charAt(l) == ')' || s.charAt(l) == '}' || s.charAt(l) == ']' ||
                    s.charAt(r) == '(' || s.charAt(r) == '{' || s.charAt(r) == '['
                   ){
                    //stop expanding
                    //if expansion hasn't reached prev limit, return false
                }

                l--;
                r++;


            }



        }
    }


};
