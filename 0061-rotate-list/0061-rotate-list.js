class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head;

  let current = head;
  let tail = current;
  let length = 1;
  while (tail.next) {
    tail = tail.next;
    length++;
  }
  tail.next = head;

  k = k % length;
  for (let i = 0; i < length - k; i++) {
    tail = tail.next;
  }
  current = tail.next;
  tail.next = null;
  return current;
};