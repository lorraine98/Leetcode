/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    
    const R = board.length, C = board[0].length;
    const clickR = click[0], clickC = click[1];

    if (board[clickR][clickC]=='M') {
        board[clickR][clickC] = 'X';
        return board;
    }

    if (board[clickR][clickC]=='B') {
        return board;
    }

    let tempR = clickR - 1, tempC = clickC - 1;
    let mineCounter = 0;

    for (let i=tempR;i<tempR+ 3;i++) {
        for (let j=tempC;j<tempC + 3;j++) {
            if (i < 0 || i >= R || j < 0 || j >= C) continue;
            if (board[i][j]=='M') mineCounter++;
        }
    }

    if (mineCounter != 0) {
        board[clickR][clickC] = mineCounter.toString();
        return board;
    }

    board[clickR][clickC] = 'B';

    for (let i=tempR;i<tempR+ 3;i++) {
        for (let j=tempC;j<tempC + 3;j++) {
            if (i < 0 || i >= R || j < 0 || j >= C) continue;
            board = updateBoard(board, [i, j]);
        }
    }
    
    return board;
};