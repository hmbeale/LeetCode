//https://leetcode.com/problems/largest-rectangle-in-histogram/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {

    let res = 0;

    if (heights.length == 0){
        return 0;
    }

    //spreads to l and r of index
    //only to values greater than index element
    const spreadCalc = (arr, index) => {
        let l = index;
        let r = index;
        let lowest = arr[index];

        while (l>=0){
            if (arr[l-1] >= lowest){
                l--;
            }
            else{
                break;
            }
        }

        while (r<arr.length){
            if (arr[r+1] >= lowest){
                r++;
            }
            else{
                break;
            }
        }
        //height times width
        return lowest * (r-l + 1);
    }

    //use spreadcalc on all columns, return highest value
    //don't want to use foreach because seems to refer to actual elements, not indexes

    for (let i = 0; i< heights.length; i++){
        const curArea = spreadCalc(heights, i);
        if (curArea > res){
            res = curArea;
        }
    }


    if (res<0) {return 0};
    return res;


};
