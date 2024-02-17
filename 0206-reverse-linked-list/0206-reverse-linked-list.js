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
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let first = head;
  let second = first.next;

  while (second) {
    let temp = second.next;
    second.next = first;
    first = second;
    second = temp;
  }
  head.next = null;
  head = first;
  return head;
};