/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    let prevNode = null;
    let curNode = null;
    
    const dfs = (node) => {
        while(node) {
            prevNode = curNode;
            curNode = node;
            
            const nextNode = node.next;
            
            if(prevNode) {
                prevNode.next = curNode;
                prevNode.child = null;
            }
            
            curNode.prev = prevNode;
            
            if(node.child) {
                dfs(node.child);
            }
            
            node = nextNode;
        }
    }
    
    dfs(head);
    
    return head;
};