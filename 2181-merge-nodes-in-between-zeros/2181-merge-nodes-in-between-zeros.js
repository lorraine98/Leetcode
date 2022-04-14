/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var mergeNodes = function(head) {
    let result = new ListNode(-1);
    let temp = result;
    
    while(head){
        if(head.val === 0 && head.next){
            temp.next = new ListNode(0);
            temp = temp.next;
        }
        temp.val += head.val;
        head = head.next;
    }
    return result.next;
};