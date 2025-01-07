/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let current = head;
    let length = 0;

    while (current) {
        length++;
        current = current.next;
    }

    let dummy = new ListNode(0, head);
    current = dummy;
    let count = 0;
    while (count < length - n) {
        count++;
        current = current.next;
    }
    current.next = current.next.next;
    return dummy.next;
};