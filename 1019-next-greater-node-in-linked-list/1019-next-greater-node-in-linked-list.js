/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
    let current = head
    let result = []
    while (current) {
        let next = current.next
        while (next && next.val <= current.val) {
            next = next.next
        }
        result.push(next ? next.val : 0)
        current = current.next
    }
    return result
};