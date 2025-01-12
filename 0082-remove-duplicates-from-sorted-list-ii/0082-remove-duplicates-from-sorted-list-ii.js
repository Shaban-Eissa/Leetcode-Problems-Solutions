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
var deleteDuplicates = function (head) {
    let dummy = new ListNode(0, head);
    let prev = dummy;
    let current = head;

    while (current) {
        let hasDuplicate = false;
        while (current.next && current.val === current.next.val) {
            current = current.next;
            hasDuplicate = true;
        }
        if (hasDuplicate) {
            prev.next = current.next;
        } else {
            prev = prev.next;
        }
        current = current.next;
    }

    return dummy.next;
};