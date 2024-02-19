class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  get(index) {
    if (index < 0 || index >= this.size) return -1;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.val;
  }
  addAtHead(val) {
    let newNode = new Node(val, this.head);
    this.head = newNode;
    if (this.size === 0) this.tail = newNode;
    this.size++;
  }
  addAtTail(val) {
    if (this.size === 0) {
      this.addAtHead(val);
      return;
    }
    let newNode = new Node(val);
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }
  addAtIndex(index, val) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.addAtHead(val);
      return;
    }
    if (index === this.size) {
      this.addAtTail(val);
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    let newNode = new Node(val, current.next);
    current.next = newNode;
    this.size++;
  }
  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return;
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
    if (index === this.size - 1) this.tail = current;
    this.size--;
  }
}