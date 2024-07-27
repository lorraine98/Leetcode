var subsets = function (nums) {
    if(nums.length === 1) {
        return [[], nums];
    }

    const answer = [[]];

    while(nums.length) {
        const num = nums.pop();
        
        const len = answer.length;

        for(let i = 0; i < len; i++) {
            answer.push([...answer[i], num]);
        }
    }
    
    return answer;
};

