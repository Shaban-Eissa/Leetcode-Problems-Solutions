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
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var addTwoNumbers = function (l1, l2) {
  let current = new ListNode(0);
  let result = current;
  let carry = 0;
  let sum = 0;
  while (l1 || l2) {
    sum = carry;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    current.next = new ListNode(sum);
    current = current.next;
  }
  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  return result.next;
};