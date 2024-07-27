const addSubset = (arr, num) => {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        arr.push([...arr[i], num]);
    }
}

var subsets = function (nums) {
    if (nums.length === 1) {
        return [[], nums]
    }

    const answer = [[]];

    while (nums.length) {
        const num = nums.pop();
        addSubset(answer, num);
    }

    return answer;
};
