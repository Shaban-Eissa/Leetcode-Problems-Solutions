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
var middleNode = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let current = head;
  let length = 0;
  while (current !== null) {
    current = current.next;
    length += 1;
  }

  let middle = Math.floor(length / 2);
  return traverseToMiddle(middle, head);
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