function combine(n, k) {
    const combinations = [];
    const comb = [];
    const nums = [...Array(n)].map((_, idx) => idx+1);
    
    function updateCombinations(pivot) {
        if(k === comb.length) {
           combinations.push([...comb]);
           return;
        }
        
        for(let i = pivot; i < nums.length; i++) {
            if(comb.length > 0 && comb[comb.length-1] >= nums[i]) {
                continue;
            }
            comb.push(nums[i]);
            updateCombinations(pivot+1);
            comb.pop();
            
        }
    }
    updateCombinations(0);
    return combinations;
};