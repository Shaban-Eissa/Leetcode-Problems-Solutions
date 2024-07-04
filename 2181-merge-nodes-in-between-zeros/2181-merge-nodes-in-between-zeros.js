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
var mergeNodes = function (head) {
  if (!head) {
    return null;
  }

  let headPointer = head;

  let cur = head.next;
  let total = 0;

  while (cur) {
    if (cur.val === 0) {
      headPointer.val = total;

      if (!cur.next) {
        headPointer.next = null;
      } else {
        headPointer = headPointer.next;
      }

      total = 0;
    } else {
      total += cur.val;
    }
    cur = cur.next;
  }
  return head;
};
