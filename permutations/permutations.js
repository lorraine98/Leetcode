var permute = function(nums) {
    const isSelected = new Array(nums.length).fill(false)
    const result = []
    const permutation = []
    
    const recursion = (depth) => {
        if(depth === nums.length) {
            result.push([...permutation])
            return
        }
        
        for(let i=0; i<nums.length; i++) {
            if(!isSelected[i]) {
                isSelected[i] = true
                permutation.push(nums[i])
                recursion(depth + 1)
                permutation.pop()
                isSelected[i] = false
            }
        }
    }
    
    recursion(0)
    return result
};