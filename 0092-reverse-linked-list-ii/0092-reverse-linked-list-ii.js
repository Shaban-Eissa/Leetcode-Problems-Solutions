/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let dummy = new ListNode(0, head);
    let prev = dummy;
    let current = head;
    let count = 1;

    while (count < left) {
        prev = current;
        current = current.next;
        count++;
    }

    let beforeLeft = prev;
    let afterRight = current;
    prev = null;

    while (count <= right) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        count++;
    }

    beforeLeft.next = prev;
    afterRight.next = current;

    return dummy.next;
};