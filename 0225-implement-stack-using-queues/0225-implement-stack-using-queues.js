class MyStack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(x) {
    this.queue1.push(x);
  }
  pop() {
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }
    const result = this.queue1.shift();
    while (this.queue2.length > 0) {
      this.queue1.push(this.queue2.shift());
    }
    return result;
  }

  top() {
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }
    const result = this.queue1.shift();
    this.queue2.push(result);
    while (this.queue2.length > 0) {
      this.queue1.push(this.queue2.shift());
    }
    return result;
  }

  empty() {
    return this.queue1.length === 0 && this.queue2.length === 0;
  }
}