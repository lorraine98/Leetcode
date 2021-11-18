/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let mismatch  = 0;
    let cnt = 0;
    for(let i=0; i<s.length; i++)
    {
        if(s[i] === ']')
        {
            cnt--;
        }
        else
        {
             cnt++;
        }
        if(cnt < 0)
        {
            mismatch = Math.min(mismatch, cnt);
        }
    }
    return  Math.ceil(-mismatch/ 2);
};