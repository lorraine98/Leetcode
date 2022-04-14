/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let current = head;
    let p1 = 0;
    let p2 = k - 1;
    const arr = [];
    
    while(current !== null) {
        arr.push(current);
        current = current.next;
    }
    
    p1 = arr.length - k;
    
    [arr[p1].val, arr[p2].val] = [arr[p2].val, arr[p1].val];
    
    return head;
};