/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const board = Array(n+1).fill(Infinity);
    board[k] = 0;
    
    for(let i=0; i<n; i++) {
        for(const [u, v, w] of times) {
            if(board[u] === Infinity) continue;
            if(board[v] > board[u] + w) {
                board[v] = board[u] + w;
            }
        }
    }
    let answer = 0;
    for(let i=1; i<=n; i++) {
        answer = Math.max(answer, board[i]);
    }
    return answer === Infinity ? -1 : answer;
};