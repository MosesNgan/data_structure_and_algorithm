class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueBuiltByLinkedList {
  constructor() {
    this.first = null;
    this.last = null;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
      return;
    }
    this.last.next = newNode;
    this.last = newNode;
  }

  dequeue() {
    if (this.first === null) return null;
    const value = this.first.value;
    this.first = this.first.next;
    return value;
  }
}