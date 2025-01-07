/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
    let length = 0;
    let current = head;
    let first = null;
    let second = null;

    while (current) {
        length++;
        if (second) {
            second = second.next;
        }
        if (length === k) {
            first = current;
            second = head;
        }
        current = current.next;
    }

    const temp = first.val;
    first.val = second.val;
    second.val = temp;

    return head;
};