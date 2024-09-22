/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const answer = Array(temperatures.length).fill(0);
    const stack = [];

    for (let i = 0; i < temperatures.length; ++i) {
        const curTemp = temperatures[i];

        while (stack.length > 0 && stack[stack.length - 1]?.temp < curTemp) {
            const { temp, idx } = stack.pop();
            answer[idx] = i - idx;
        }

        stack.push({
            temp: curTemp,
            idx: i
        });
    }

    return answer;
};