/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const len = matrix.length;
    const copyMatrix = Array.from(Array(len), () => Array(len));
    
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            copyMatrix[i][j] = matrix[i][j];
        }
    }
    
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            matrix[j][len - 1 - i] = copyMatrix[i][j];
        }
    }
};