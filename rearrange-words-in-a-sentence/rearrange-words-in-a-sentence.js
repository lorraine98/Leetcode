/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    let answer = '', arr = [];
    const splited = text.split(' ');
    
    splited.forEach(str => {
        const length = str.length;
        arr.push([str.toLowerCase(), length]);
    });

    arr.sort((a, b) => a[1] > b[1] ? 1 : ((a[1] < b[1] ? -1 : 0)));
    arr.forEach((d, i) => {
        if(i === 0) {
            answer += d[0][0].toUpperCase() + d[0].substr(1);
        }
        else {
            answer += ` ${d[0]}`
        }
    });
    return answer;
};