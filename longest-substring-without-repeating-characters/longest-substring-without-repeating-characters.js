/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) {
        return 0;
    }
    let max = 0;
    
    for(let i=0; i<s.length; i++) {
        if(checkRepeat(s.slice(i))) {
            let res = checkRepeat(s.slice(i));
            max = max > res ? max : res;
        }
    }   
    return max;

};

function checkRepeat(str) {
    let longest = [];
    for(let i=0; i<str.length; i++) {
        if(longest.includes(str[i])) {
            break;
        }
        longest.push(str[i]);
    }
    return longest.length;
}