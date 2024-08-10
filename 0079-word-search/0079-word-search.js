/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
];

var exist = function (board, word) {
    const row = board.length;
    const col = board[0].length;

    const isExist = (i, j, targetIdx, isVisited) => {
        if (targetIdx === word.length) {
            return true;
        }

        isVisited[i][j] = true;

        for (let k = 0; k < 4; k++) {
            const ni = i + dir[k][0];
            const nj = j + dir[k][1];

            const isInBoundary = ni >= 0 && nj >= 0 && ni < row && nj < col;

            if (isInBoundary && !isVisited[ni][nj] && board[ni][nj] === word[targetIdx]) {
                if (isExist(ni, nj, targetIdx + 1, isVisited)) {
                    return true;
                }
            }
        }

        isVisited[i][j] = false;
        return false;
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] === word[0]) {
                const isVisited = Array.from({ length: row }, () => Array(col).fill(false));
                if (isExist(i, j, 1, isVisited)) {
                    return true;
                }
            }
        }
    }

    return false;
};