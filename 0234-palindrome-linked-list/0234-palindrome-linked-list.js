/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const arr = [];

    const dfs = (node) => {
        if(!node.val) {
            return;
        }

        arr.push(node.val);
        if(node.next) {
            dfs(node.next);
        }
    }

    dfs(head);

    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        if(arr[left] !== arr[right]) {
            return false;
        }

        left += 1;
        right -= 1;
    }
    
    return true;
};