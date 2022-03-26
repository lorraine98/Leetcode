/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const arr = [];
    const m = matrix.length, n = matrix[0].length;
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            arr.push(matrix[i][j]);
        }
    }
    
    let low = 0, high = arr.length - 1, mid;
    
    while(low <= high) {
        mid = parseInt((low + high) / 2);
        
        if(arr[mid] === target) return true;
        else if(arr[mid] > target) high = mid - 1;
        else low = mid + 1;
    }
    
    return false;
};