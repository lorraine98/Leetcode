/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n <= 0) return false;
    while(n > 1) {
        if(n % 3 === 0) {
           n = parseInt(n / 3);
        }
        else {
            return false;
        }
    }
    return true;
};