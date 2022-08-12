/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
   if (head === null) return true;

  let values = [];
  let current = head;

  while (current != null) {
    values.push(current.val);
    current = current.next;
  }

  if (values.join("") === values.reverse().join("")) {
    return true;
  }
  return false;
};