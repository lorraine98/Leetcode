var findOriginalArray = function(changed) {
    
    if(changed.length % 2 !== 0) return []; 
    changed.sort((a, b) => b - a);
    
    const answer = [];
    
    while(changed.length) {
        let isBreak = false;
        const original = changed.pop();
        const doubled = original * 2;
        for(let i=changed.length-1; i>=0; i--) {
            if(changed[i] === doubled) {
                answer.push(original);
                changed.splice(i, 1);
                isBreak = true;
                break;
            }
        }
        if(!isBreak) return [];
    } 
    return answer;
};