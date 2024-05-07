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
var doubleIt = function (head) {
  const result = head.val * 2 > 9 ? new ListNode(1, head) : head;
  let carry = 0;
  let current = head;

  while (current !== null) {
    const next = current.next || 0;
    carry = 0;

    if (next.val * 2 > 9) carry = 1;
    current.val = ((current.val * 2) % 10) + carry;

    current = current.next;
  }

  return result;
};

console.log(doubleIt(new ListNode(1, new ListNode(8, new ListNode(9)))));