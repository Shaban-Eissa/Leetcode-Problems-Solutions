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
var sortList = function (head) {
    const arr = []; 
    let current = head; 

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    arr.sort((a, b) => a - b);

    head = current; 
    for (const n of arr) {
        current.val = n;
        current = current.next; 
    }
    return head;
};