class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.printList();
  };

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  };

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

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;

    return this.printList();
  }

  remove(index) {
    if (!this.head) {
      return this.printList();
    }
    if (index >= this.length) {
      index = this.length - 1;
    }
    if (index < 0) {
      this.head = this.head.next;
      this.length--;
      return this.printList();
    }

    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;

    return this.printList();
  }
};

const myLinkedList = new LinkedList(10);

console.log('Initail list:');
console.log(myLinkedList.printList());

console.log('Append 20:');
console.log(myLinkedList.append(20));

console.log('Prepend 1');
console.log(myLinkedList.prepend(1));

console.log('Insert 5 at index 1:');
console.log(myLinkedList.insert(1, 5));

console.log('Insert 99 at index the end (index greater than list length):');
console.log(myLinkedList.insert(99, 99));

console.log('Insert -99 at index the beginning (index less than 0):');
console.log(myLinkedList.insert(-99, -99));

console.log('Remove element with index 1:');
console.log(myLinkedList.remove(1));

console.log('Remove last element (index greater than list length):');
console.log(myLinkedList.remove(999));

console.log('Remove first element (index less than 0):');
console.log(myLinkedList.remove(-999));

