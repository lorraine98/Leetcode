/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
// var asteroidCollision = function (asteroids) {
//     let posCnt = 0;
//     let negCnt = 0;

//     for (const a of asteroids) {
//         if (a > 0) {
//             posCnt += 1;
//         } else {
//             negCnt += 1;
//         }
//     }

//     while (posCnt > 0 && negCnt > 0) {
//         for (let i = 0; i < asteroids.length; i++) {
//             const cur = asteroids[i];
//             const next = asteroids[i + 1];
//             if (cur > 0 && next < 0) {
//                 if (Math.abs(cur) > Math.abs(next)) {
//                     asteroids.splice(i + 1, 1);
//                     cur > 0 ? negCnt-- : posCnt--;
//                 } else if (Math.abs(cur) < Math.abs(next)) {
//                     asteroids.splice(i, 1);
//                     next > 0 ? negCnt-- : posCnt--;
//                 } else {
//                     asteroids.splice(i, 2);
//                     negCnt--;
//                     posCnt--;
//                 }
//             }
//         }
//     }

//     return asteroids;
// };

var asteroidCollision = function(asteroids) {
    const stack = [];

    for (let a of asteroids) {
        let alive = true;

        while (alive && a < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
            const top = stack[stack.length - 1];

            if (top < -a) {
                stack.pop();
                continue;
            } else if (top === -a) {
                stack.pop();
            }
            alive = false;
        }

        if (alive) {
            stack.push(a);
        }
    }

    return stack;
};