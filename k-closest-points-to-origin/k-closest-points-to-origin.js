/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const pointsDistance = [], answer=[];
    points.forEach(pos => {
        const distance = calcEucdlieanDistance(pos);
        pointsDistance.push([pos, distance]);
    });
    pointsDistance.sort((a,b) => a[1]-b[1]);
    for(let i=0; i<k; i++) {
        answer.push(pointsDistance[i][0]);
    }
    return answer;
};

function calcEucdlieanDistance(arr) {
    const [x, y] = arr;
    return (x*x + y*y);
}