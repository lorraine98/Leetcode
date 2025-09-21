/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1 && !list2) {
        return list1;
    }
    const answerNode = new ListNode();

    const updateNode = (target1, target2, target) => {
        target.val = target1.val < target2.val ? target1.val : target2.val;
        target.next = new ListNode(target1.val < target2.val ? target2.val : target1.val);
    }

    const fillRestNode = (node, target) => {
        while(node) {
            target.val = node.val;
            node = node.next;
        }
    }

    const go = (node1, node2, target) => {
        if (!node1 && !node2) {
            return;
        }

        if (node1?.next && node2?.next) {
            updateNode(node1, node2, target);
            target.next.next = new ListNode();
            go(node1.next, node2.next, target.next.next);
        } else if (node1?.next !== null || node2?.next !== null) {
            fillRestNode(node1 || node2, target);
        } else {
            updateNode(node1, node2, target);
        }
    }

    go(list1, list2, answerNode);

    return answerNode;
};