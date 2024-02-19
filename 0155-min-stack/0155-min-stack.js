class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class MinStack {
  constructor() {
    this.LastAddedNode = null;
    this.FirstAddedNode = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val, this.LastAddedNode);
    if (!this.FirstAddedNode) {
      this.FirstAddedNode = newNode;
    }
    this.LastAddedNode = newNode;
    this.length++;
  }

  pop() {
    if (!this.LastAddedNode) return null;
    if (this.LastAddedNode === this.FirstAddedNode) {
      this.FirstAddedNode = null;
    }
    this.LastAddedNode = this.LastAddedNode.next;
    this.length--;
  }

  top() {
    return this.LastAddedNode.value;
  }

  getMin() {
    let min = this.LastAddedNode.value;
    let currentNode = this.LastAddedNode;
    while (currentNode) {
      if (currentNode.value < min) {
        min = currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return min;
  }
}