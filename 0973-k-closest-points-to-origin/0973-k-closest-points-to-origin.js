/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    const kClosestArr = [];

    const distTable = points.map(point => {
        const [x, y] = point;
        return [x ** 2 + y ** 2, point];
    }).sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < k; i++) {
        kClosestArr.push(distTable[i][1]);
    }

    return kClosestArr;
};