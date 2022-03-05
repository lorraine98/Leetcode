/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n <= 0) return false;
    let N = n;
    while(N > 1) {
        if(N % 3 === 0) {
            const newN = parseInt(N / 3);
            N = newN;
        }
        else {
            return false;
        }
    }
    return true;
};