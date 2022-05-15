/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    let answer = 0;
    
    const canGo = (x, y) => {
        return x < m && y < n && x >= 0 && y >= 0;
    }
    
    const dfs = (x, y) => {
        if(!canGo(x,y) || grid[x][y] === '0') {
            return;
        }
        grid[x][y] = '0';
        dfs(x + 1, y);
        dfs(x - 1, y);
        dfs(x, y + 1);
        dfs(x, y - 1);
    }
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === '1') {
                answer++
                dfs(i, j);
            }
        }
    }
    
    return answer;
};  