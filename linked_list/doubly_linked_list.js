class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    const prevNode = this.tail;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }

  prepend(value) {
    const newNode = new Node(value);
    const nextNode = this.head;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.head = newNode;
    this.length++;
    return this.printList();
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
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

  insert(index, value) {
    const newNode = new Node(value);
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    if (index < 0) {
      this.prepend(value);
      return this.printList();
    }
    const prevNode = this.traverseToIndex(index - 1);
    const nextNode = prevNode.next;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    prevNode.next = newNode;
    nextNode.prev = newNode;
    this.length++;
    return this.printList();
  };

  remove(index) {
    if (index < 0 || index >= this.length) {
      return this.printList();
    }
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return this.printList();
    }
    if (index === this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
      return this.printList();
    }
    const prevNode = this.traverseToIndex(index - 1);
    const nextNode = prevNode.next.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  };
}