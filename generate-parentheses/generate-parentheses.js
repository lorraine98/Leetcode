/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const st = ['(']; 
    let openCnt = 1;
    const LEN = n*2
    const parenthesis = [];

    function dfs() {
        if(openCnt < 0 || st.length > LEN) {
            return;
        }
        if(openCnt === 0 && st.length === LEN) {
            parenthesis.push(st.join(""));
            return;
        }
        st.push('(');
        openCnt++;
        dfs();
        st.pop();
        openCnt--;

        st.push(')');
        openCnt--;
        dfs();
        st.pop();
        openCnt++;
    }
    
    dfs();
    return parenthesis;
}
    
    