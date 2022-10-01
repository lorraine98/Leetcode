/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let answer = 0;
    intervals.sort((a, b) => a[1] - b[1]);
    
    for(let i = 0; i < intervals.length - 1; i++) {
        const [curStart, curEnd] = intervals[i];
        const [nextStart, nextEnd] = intervals[i + 1];
        if(curEnd > nextStart) {
            answer += 1;
            intervals[i + 1] = intervals[i];
        }
    }
    
    return answer;
};