/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    const demical = n.toString(2);
    let result = 0;
    for(let i = 0; i < demical.length; i++) {
        if(demical[i] === '1') {
            result += 1;
        }
    }
    return result;
};