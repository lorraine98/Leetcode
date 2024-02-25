/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function(tokens) {
    if(tokens.length === 1) {
        return tokens[0];
    }

    let answer = 0;
    const savedTokens = [];

    for(const token of tokens) {
        if(token === '+' || token === '-' || token === '*' || token === '/') {
            const second = +savedTokens.pop();
            const first = +savedTokens.pop();

            if(token === '+') {
                answer = first + second;
            } else if(token === '-') {
                answer = first - second;
            } else if(token === '*') {
                answer = first * second;
            } else if(token === '/') {
                answer = Math.trunc(first / second);
            } else {
                throw new Error('unexpected token');
            }

            savedTokens.push(answer);
        }
        else {
            savedTokens.push(token);
        }
    }
    return answer;
};