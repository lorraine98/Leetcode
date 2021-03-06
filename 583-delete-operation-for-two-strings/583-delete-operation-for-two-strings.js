/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const lcs = Array.from(Array(word1.length + 1), () => Array(word2.length + 1).fill(0));
    const firstWordLength = word1.length;
    const secondWordLength = word2.length;

    for (let m = 1; m <= firstWordLength; m++) {
        for (let n = 1; n <= secondWordLength; n++) {
            const isSameCharacter = word1[m - 1] === word2[n - 1];
            const maxSubsequenceTillNow = Math.max(lcs[m][n - 1], lcs[m - 1][n]);
            lcs[m][n] = isSameCharacter ? 1 + lcs[m - 1][n - 1] : maxSubsequenceTillNow;
        }
    }
    
    return firstWordLength + secondWordLength - 2 * lcs[firstWordLength][secondWordLength];
};