/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    const directX = [1, 1, 0, -1, -1, -1, 0, 1];
    const directY = [0, -1, -1, -1, 0, 1, 1, 1];
    const r = board.length, l = board[0].length;
    let visited = Array.from(Array(r), () => Array(l).fill(false));
    
    const checkRange = (x, y) => x>=0 && x<r && y>=0 && y<l;
    
    const dfs = (x, y) => {
        visited[x][y] = true;
        if(board[x][y] === 'M') {
            board[x][y] = 'X';
            return;
        }
        let isBlank = true;
        let count = 0;
        const next = [];
        
        for(let i=0; i<8; i++) {
            const nx = x + directX[i];
            const ny = y + directY[i];
            
            if(checkRange(nx, ny) && !visited[nx][ny]) {
                if(board[nx][ny] === 'E') {
                    next.push([nx, ny]);
                } else if(board[nx][ny] === 'M') {
                    count++;
                    isBlank = false;
                }
            }
        }
        
        if(isBlank) {
            board[x][y] = 'B';
            for(let i=0; i<next.length; i++) {
                dfs(next[i][0], next[i][1]);
            }
        }
        else {
            board[x][y] = count.toString();
        }
    }
    dfs(click[0], click[1]);
    return board;
};