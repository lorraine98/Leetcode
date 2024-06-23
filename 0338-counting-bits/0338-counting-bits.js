/**
 * @param {number} n
 * @return {number[]}
 */
// var countBits = function (n) {
//     const answer = Array(n + 1).fill(0);

//     for (let i = 0; i <= n; i++) {
//         const binary = i.toString(2);
//         for (let j = 0; j < binary.length; j++) {
//             if (binary[j] === '1') {
//                 answer[i] = answer[i] + 1;
//             }
//         }
//     }

//     return answer;
// };

var countBits = function (n) {
    const answer = Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        // i & (i - 1)은 i의 가장 낮은 1 비트를 제거한 값입니다.
        // 따라서, answer[i]는 answer[i & (i - 1)] + 1과 같습니다.
        answer[i] = answer[i >> 1] + (i & 1);
    }

    return answer;
};
