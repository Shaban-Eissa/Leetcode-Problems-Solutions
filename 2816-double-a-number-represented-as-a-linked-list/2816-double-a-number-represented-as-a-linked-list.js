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

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var doubleIt = function (head) {
    let current = head;
    let str = '';

    while (current) {
        str += current.val;
        current = current.next;
    }
    const doubledStr = (BigInt(str) * 2n).toString();
    
    let newHead = new Node(doubledStr[0]);
    let newNode = newHead;
    for (let i = 1; i < doubledStr.length; i++) {
        newNode.next = new Node(doubledStr[i]);
        newNode = newNode.next;
    }
    return newHead;
};