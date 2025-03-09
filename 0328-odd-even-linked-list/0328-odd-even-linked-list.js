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
var oddEvenList = function (head) {
    if (!head?.next) {
        return head;
    }

    let oddNode = head;
    let evenNode = head.next;
    const firstEvenNode = evenNode;
    let lastOddNode = head;

    while (oddNode || evenNode) {
        if (oddNode?.next) {
            oddNode.next = oddNode.next.next;
        }
        oddNode = oddNode?.next;
        if (oddNode) {
            lastOddNode = oddNode;
        }

        if (evenNode?.next) {
            evenNode.next = evenNode.next.next;
        }
        evenNode = evenNode?.next;
    }


    lastOddNode.next = firstEvenNode;

    return head;
};