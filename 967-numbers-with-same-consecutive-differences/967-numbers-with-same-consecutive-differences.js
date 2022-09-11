/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(N, K) {
    let prevSet = new Set([0,1,2,3,4,5,6,7,8,9]);

    for (let n = 2; n <= N; n++) { 
        const newSet = new Set();

        for (const prevVal of prevSet) {
            const lastDig = prevVal % 10;

            const plusK = lastDig + K;
            const minusK = lastDig - K;

            if (prevVal > 0 && plusK < 10) newSet.add((prevVal * 10) + plusK);
            if (prevVal > 0 && minusK >= 0) newSet.add((prevVal * 10) + minusK);
        }

        prevSet = newSet;
    }

    return [...prevSet];
};