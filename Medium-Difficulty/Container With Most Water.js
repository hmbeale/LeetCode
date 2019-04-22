/**
* https://leetcode.com/problems/container-with-most-water/
* Given n non-negative integers a1, a2, ..., an , where each represents a point
* at coordinate (i, ai). n vertical lines are drawn such that the two endpoints
* of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis
* forms a container, such that the container contains the most water.
**/

//solved!




/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let bigArea = 0;

    //if arrays are only 2, they're too small for the algo below
    if (height.length ==2){
        if (height[0]>height[1]){
            bigArea = height[1];
        }else{
            bigArea = height[0];
        }
    }


    //calculate areas for [i], starting a certain distance away based on bigArea
    for (let i = 0; i<height.length; i++){
        let minDist = Math.floor(bigArea/height[i]);

        //search right
        for (let j = i + minDist; j<(height.length); j++){

            let area = 0;

            if (height[i]>=height[j]){
                area = height[j] * Math.abs(j-i);
            }else{
                area = height[i] * Math.abs(j-i);
            }

            if (area >bigArea){
                bigArea = area;
            }
        }

        //search left
        for (let j = i - minDist; j>=0; j--){

            let area = 0;

            if (height[i]>=height[j]){
                area = height[j] * Math.abs(j-i);
            }else{
                area = height[i] * Math.abs(j-i);
            }

            if (area >bigArea){
                bigArea = area;
            }
        }

    }

    return bigArea;


};
