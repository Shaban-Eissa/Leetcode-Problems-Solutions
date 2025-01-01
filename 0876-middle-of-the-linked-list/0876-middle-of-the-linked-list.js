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

// Build a function to get the middle of linkedlist 

class Node {
    constructor(value ) {
        this.value = value 
        this.next = null 
    }
}
class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
      };
      this.tail = this.head;
      this.length = 1;
    }
  
    append(value) {
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
      return this;
    }
  
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
      return this;
    }
  
    printList() {
      const array = [];
      let current = this.head;
      while (current !== null) {
        array.push(current.value);
        current = current.next;
      }
      return array;
    }
  
    insert(index, value) {
      if (index >= this.length) {
        return this.append(value);
      }
  
      const newNode = new Node(value);
      const leader = this.traverseToIndex(index - 1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length += 1;
      return this.printList();
    }
  
    traverseToIndex(index) {
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
  
    remove(index) {
      if (index >= this.length) {
        return this.printList();
      }
  
      const leader = this.traverseToIndex(index - 1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length -= 1;
      return this.printList();
    }
  
    reverse() {
      if (!this.head.next) {
        return this.head;
      }
  
      let first = this.head;
      let second = first.next;
      this.tail = this.head;
      
  
      while (second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }
  
      this.head.next = null;
      this.head = first;
      return this.printList();
    }
  }

var middleNode = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let length = 0;
  let current = head;
  while (current !== null) {
    current = current.next;
    length += 1;
  }

  let middleIndex = Math.floor(length / 2);
  return getMiddleIndex(middleIndex, head);
};

var getMiddleIndex = function (middleIndex, head) {
  let currentIndex = 0;
  let currentNode = head;
  while (currentIndex !== middleIndex) {
    currentNode = currentNode.next;
    currentIndex += 1;
  }
  return currentNode;
};

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);

console.log(middleNode(myLinkedList.head));
