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
var middleNode = function(head) {
    let size = 0;

    const go = (node) => {
        if(!node) {
            return;
        }
        size += 1;
        go(node.next);
    }

    go(head);

    const midIdx = Math.floor(size / 2);

    let answer;

    const go2 = (node, idx) => {
        if(!node) {
            return;
        }

        if(idx === midIdx) {
            answer = node;
        }

        go2(node.next, idx + 1);
    }

    go2(head, 0);
    
    return answer;
};