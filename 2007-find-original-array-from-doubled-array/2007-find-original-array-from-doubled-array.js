var findOriginalArray = function(changed) {
    
    if(changed.length % 2 !== 0) return []; 
    changed.sort((a, b) => b - a);
    
    const answer = [];
    const originalArr = [];
    
    while(changed.length) {
        const original = changed.pop();
        originalArr.push(original);
        const doubled = original * 2;
        for(let i=changed.length-1; i>=0; i--) {
            if(changed[i] === doubled) {
                answer.push(original);
                changed.splice(i, 1);
                originalArr.pop();
                break;
            }
        }
        if(originalArr.length) return [];
    } 
    return answer;
};