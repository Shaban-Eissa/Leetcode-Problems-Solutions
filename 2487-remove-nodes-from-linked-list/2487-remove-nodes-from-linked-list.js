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
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
var removeNodes = function (head) {
  const stack = [];

  while (head) {
    while (stack.length && head.val > stack[stack.length - 1]) {
      stack.pop();
    }
    stack.push(head.val);
    head = head.next;
  }

  while (stack.length) {
    head = new ListNode(stack.pop(), head);
  }
  return head;
};