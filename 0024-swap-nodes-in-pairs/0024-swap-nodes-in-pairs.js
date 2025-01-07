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
var swapPairs = function (head) {
    let current = head
    let dummy = new ListNode(0, head)
    let prev = dummy
    while (current && current.next) {
        let first = current
        let second = current.next
        prev.next = second
        first.next = second.next
        second.next = first
        prev = first
        current = first.next
    }

    return dummy.next
};