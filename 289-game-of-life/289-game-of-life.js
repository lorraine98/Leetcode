/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const m = board.length;
    const n = board[0].length;
    const copyBoard = Array.from(Array(m), () => Array(n));
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            copyBoard[i][j] = board[i][j];
        }
    }
    
    const dx = [1, -1, 0, 0, 1, -1, -1, 1];
    const dy = [0, 0, 1, -1, 1, -1, 1, -1];
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            let liveCnt = 0;
            let deadCnt = 0;
            
            for(let k = 0; k < dx.length; k++) {
                if(i + dx[k] < 0 || j + dy[k] < 0 || i + dx[k] >= m || j + dy[k] >= n) {
                    continue;
                }
                
                const next = copyBoard[i + dx[k]][j + dy[k]]; 
                next ? liveCnt += 1 : deadCnt += 1;
            }
            
            if((board[i][j] && liveCnt >= 2 && liveCnt <= 3) || !board[i][j] && liveCnt === 3) {
                board[i][j] = 1;
            }
            else {
                board[i][j] = 0;
            }
        }
    }
};