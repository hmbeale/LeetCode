//https://leetcode.com/problems/search-a-2d-matrix-ii/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    //matrix [i][i] less than target

    //matrix [i][0] less than target


    //i iterates matrix
    //j iterates matrix arrays
    for (let i = 0; i< matrix.length; i++){
        if (matrix[i][0] > target){
            return false;
        }

        for (let j = 0; j<matrix[i].length; j++){
            const cur = matrix[i][j];
            if (cur == target){
                return true;
            }
            if (cur > target){
                break;
            }
        }
    }

    return false;

};
