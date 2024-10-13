/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        const memo = Array(9).fill(true);
        const curBoard = board[i];
        for (let j = 0; j < 9; j++) {
            const target = +curBoard[j] - 1;
            if (isNaN(target)) {
                continue;
            }
            if (memo[target]) {
                memo[target] = false;
            } else {
                return false;
            }
        }
    }

    for (let i = 0; i < 9; i++) {
        const memo = Array(9).fill(true);
        for (let j = 0; j < 9; j++) {
            const target = +board[j][i] - 1;
            if (isNaN(target)) {
                continue;
            }
            if (memo[target]) {
                memo[target] = false;
            } else {
                return false;
            }
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const memo = Array(9).fill(true);
            for (let row = i * 3; row < i * 3 + 3; row++) {
                for (let col = j * 3; col < j * 3 + 3; col++) {
                    const target = +board[row][col] - 1;
                    if (isNaN(target)) {
                        continue;
                    }
                    if (memo[target]) {
                        memo[target] = false;
                    } else {
                        return false;
                    }
                }
            }
        }
    }

    return true;
};