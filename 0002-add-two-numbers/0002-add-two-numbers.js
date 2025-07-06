/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function stringNumberToList(str) {
  const digits = str.split('').reverse();

  let head = new ListNode(parseInt(digits[0]));
  let current = head;

  for (let i = 1; i < digits.length; i++) {
    const digit = parseInt(digits[i]);
    if (isNaN(digit)) continue; // 잘못된 문자 제거 (안전장치)
    current.next = new ListNode(digit);
    current = current.next;
  }

  return head;
}

var addTwoNumbers = function (l1, l2) {
    let str1 = '';
    let current1 = l1;
    while (current1) {
        str1 = current1.val + str1;
        current1 = current1.next;
    }

    let str2 = '';
    let current2 = l2;
    while (current2) {
        str2 = current2.val + str2;
        current2 = current2.next;
    }
    const sum = BigInt(str1) + BigInt(str2);
    return stringNumberToList(sum.toString());
};