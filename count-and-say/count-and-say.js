/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let str = '1';
    for(let i=1; i<n; i++) {
        let splitedArr = str.split('');
        str = '';
        let cnt = 1;
        for(let j=0; j<splitedArr.length; j++) {
            if(splitedArr[j] !== splitedArr[j+1]) {
                str += cnt + splitedArr[j];
                cnt = 1;
            }
            else {
                cnt++;
            }
        }
    }
    return str;
};