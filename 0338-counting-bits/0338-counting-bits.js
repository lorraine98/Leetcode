/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    const answer = Array(n + 1).fill(0);

    for (let i = 0; i <= n; i++) {
        const binary = i.toString(2);
        for (let j = 0; j < binary.length; j++) {
            if (binary[j] === '1') {
                answer[i] = answer[i] + 1;
            }
        }
    }

    return answer;
};