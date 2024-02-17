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
var deleteMiddle = function (head) {
  if (head.next === null) {
    return null;
  }
  let current = head;
  let length = 0;
  while (current !== null) {
    current = current.next;
    length += 1;
  }
  let middle = Math.floor(length / 2);
  let previous = traverseToMiddle(middle - 1, head);
  let unwantedNode = previous.next;
  previous.next = unwantedNode.next;
  return head;
};

const traverseToMiddle = (index, head) => {
  let counter = 0;
  let currentNode = head;
  while (counter !== index) {
    currentNode = currentNode.next;
    counter += 1;
  }
  return currentNode;
};