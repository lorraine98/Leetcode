/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let front = head;
    let back = head;

    for(let i = 0; i < n; i++) {
        back = back.next;
    }

    if(!back) {
        return head.next;
    }

    while(back.next) {
        front = front.next;
        back = back.next;
    }

    front.next = front.next?.next;

    return head;
};