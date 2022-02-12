/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    let answer = s.split('');
    
    for(let i=0; i<indices.length; i++) {
        const source = sources[i];
        const target = targets[i];
        
        if(s.slice(indices[i], indices[i] + source.length) === source) {
            answer[indices[i]] = [target];
            let cntReplaceWord = source.length - 1;
            while(cntReplaceWord > 0) {
                answer[++indices[i]] = '';
                cntReplaceWord--;
            }
        }
    }
    return answer.join('');
};