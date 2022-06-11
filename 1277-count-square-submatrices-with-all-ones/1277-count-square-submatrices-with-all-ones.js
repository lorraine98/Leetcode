/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const min = Math.min(m, n);
    let answer = 0;
    
    const isSubmatrices = (cnt, x, y) => {
        for(let j = 1; j <= cnt; j++) {
            const crossX = x + j;
            const crossY = y + j;
            
            if(crossX >= m || crossY >= n || !matrix[crossX][crossY]) {
                return false;
            }
            
            for(let i = 1; i <= j; i++) {
                if(crossX < i || crossY < i) {
                    return false;
                }
                const up = matrix[crossX - i][crossY];
                const left = matrix[crossX][crossY - i];
                
                if(!up || !left) {
                    return false;
                }
            }
        }
        return true;
    }
    
    for(let k = 0; k < min; k++) {
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(matrix[i][j] && k === 0) {
                    answer += 1;
                }
                else if(matrix[i][j] && k > 0) {
                    if(isSubmatrices(k, i, j)) {
                        answer += 1;
                    }
                }
            }
        }
    }
    
    return answer;
};