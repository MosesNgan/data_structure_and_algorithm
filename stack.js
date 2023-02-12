class Stack {
  constructor() {
      this.items = [];
  }

  push(item) {
      this.items.push(item);
  }

  pop() {
      if(this.items.length === 0) {
          return "Underflow";
      }
      return this.items.pop();
  }

  peek() {
      return this.items[this.items.length - 1];
  }

  isEmpty() {
      return this.items.length === 0;
  }

  printStack() {
      let str = "";
      for(let i = 0; i < this.items.length; i++) {
          str += this.items[i] + " ";
      }
      return str;
  }
};

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class StackBuiltByLinkedList {
  constructor() {
    this.top = null;
    this.bottom = null;
  };

  push(item) {
    const newNode = new Node(item);
    if (this.top === null) {
      this.top = newNode;
      this.bottom = newNode;
      return;
    }
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.top === null) return null;
    const value = this.top.item;
    this.top = this.top.next;
    return value;
  }

  peek() {
    return this.top.item;
  }

}