/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    let prevSlope;

    for (let i = 0; i < coordinates.length - 1; i++) {
        const [curX, curY] = coordinates[i];
        const [nextX, nextY] = coordinates[i + 1];

        let slope = (nextY - curY) / (nextX - curX);
        if (Math.abs(slope) === Infinity) {
            slope = Math.abs(slope);
        }

        if (prevSlope !== undefined && prevSlope !== slope) {
            return false;
        }

        prevSlope = slope;
    }

    return true;
};