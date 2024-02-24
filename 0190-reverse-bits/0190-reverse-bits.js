/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    const strN = `${n.toString(2)}`;
    const reversedStrN = strN.split("").reverse().join("").padEnd(32, "0");
    return parseInt(reversedStrN, 2);
};