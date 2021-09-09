/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let answer = 0
    
    const row = grid.length
    const col = grid[0].length
    
    const diffR = [0, 0, 1, -1]
    const diffC = [1, -1, 0, 0]
    
    for(let r=0; r<row; r++) {
        for(let c=0; c<col; c++) {
            if(grid[r][c] !==1) {
                continue
            }
            for(let i=0; i<4; i++) {
                const nextR = r + diffR[i]
                const nextC = c + diffC[i]
                
                if(nextR < 0 || nextR >= row || nextC < 0 || nextC >= col) {
                    answer++
                    continue
                }
                
                if(grid[nextR][nextC] === 0) {
                    answer++
                }
            }
        }
    }
    return answer
};