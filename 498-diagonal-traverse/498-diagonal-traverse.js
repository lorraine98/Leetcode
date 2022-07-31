/**
 * @param {number[][]} mat
 * @return {number[]}
 */
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    const R = mat.length, C = mat[0].length;

    const startList = [
        ...Array.from({ length: C }, (_, i) => [0, i]),
        ...Array.from({ length: R - 1 }, (_, i) => [i + 1, C - 1]),
    ];

    const finishList = [
        ...Array.from({ length: R }, (_, i) => [i, 0]),
        ...Array.from({ length: C - 1 }, (_, i) => [R - 1, i + 1]),
    ];

    for (let i = 0; i < startList.length; i += 2) {
        [startList[i], finishList[i]] = [finishList[i], startList[i]];
    }

    const ans = [];

    for (let i = 0; i < startList.length; i++) {
        let [r, c] = startList[i];
        const [fr, fc] = finishList[i];

        ans.push(mat[r][c]);

        while(r != fr || c != fc) {
            if (i % 2 === 0) {
                r += -1;
                c += 1;
            } else {
                r += 1;
                c += -1;
            }
            ans.push(mat[r][c]);
        }
    }

    return ans;
};