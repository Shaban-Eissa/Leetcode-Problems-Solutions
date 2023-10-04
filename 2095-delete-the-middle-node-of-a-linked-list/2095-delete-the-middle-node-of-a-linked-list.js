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
    if (!head.next) return null;
    let len = 0, curr = head;
    while (curr) {
        len++;
        curr = curr.next;
    }
    len = Math.floor(len / 2);
    curr = head;
    while (len - 1) {
        curr = curr.next;
        len--;
    }
    curr.next = curr.next.next;
    return head;
};
