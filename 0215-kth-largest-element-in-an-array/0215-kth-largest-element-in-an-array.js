/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

var findKthLargest = function (nums, k) {
    const targetIdx = nums.length - k;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // 임의의 피벗을 선택해 가장 왼쪽으로 보냅니다.
        const randomPivotIndex = left + Math.floor(Math.random() * (right - left + 1));
        swap(nums, left, randomPivotIndex);
        const pivot = nums[left];
        
        // 3-way partition을 위한 포인터 설정
        // lt: 피벗보다 작은 그룹의 오른쪽 경계
        // gt: 피벗보다 큰 그룹의 왼쪽 경계
        // i: 현재 탐색중인 인덱스
        let lt = left;
        let gt = right;
        let i = left + 1;

        while (i <= gt) {
            if (nums[i] < pivot) {
                lt++;
                swap(nums, i, lt);
                i++;
            } else if (nums[i] > pivot) {
                swap(nums, i, gt);
                gt--;
            } else { // nums[i] === pivot
                i++;
            }
        }
        
        // 피벗을 제자리(작은 그룹과 같은 그룹 사이)로 옮깁니다.
        swap(nums, left, lt);

        // 파티션 후 목표 인덱스의 위치 확인
        if (targetIdx < lt) {
            // 목표가 '작은 그룹'에 있으면 왼쪽 범위를 탐색
            right = lt - 1;
        } else if (targetIdx > gt) {
            // 목표가 '큰 그룹'에 있으면 오른쪽 범위를 탐색
            left = gt + 1;
        } else {
            // 목표가 '같은 그룹'에 있으면 피벗 값이 정답
            return pivot;
        }
    }
};