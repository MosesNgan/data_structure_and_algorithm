class BiaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new BiaryTreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      // Some nodes exist.
      let currentNode = this.root;
      while(true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left  = newNode;
            return this;
          }
          // go to left and check again
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          // go to right and check again
          currentNode = currentNode.right;
        }
      }
    }
  };
  lookup(value) {
    if (!this.root) {
      return false;
    } else {
      // Some nodes exist.
      let currentNode = this.root;
      while(currentNode) {
        if (value == currentNode.value) {
          return currentNode;
        } else if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          currentNode = currentNode.right;
        }
      }
      return false;
    }
  };
  remove(value) {
    //  if node doesn't exist - return false
    if (!this.lookup(value)) {
      return false;
    }
    //  else node exists
    else {
      // Find the parent node
      let currentNode = this.root;
      let parentNode = null;
      while(currentNode) {
        if (value < currentNode.value) {
          parentNode = currentNode;
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          parentNode = currentNode;
          currentNode = currentNode.right;
        } else if (value == currentNode.value) {
          // option 1: no right child
          if (currentNode.right == null) {
            if (parentNode === null) {
              this.root = currentNode.left;
            } else {
              if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.left;
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.left;
              };
            }
          }
          // option 2: right child which doesnt have a left child
          else if (currentNode.right.left == null) {
            if (parentNode === null) {
              this.root = currentNode.left;
            } else {
              currentNode.right.left = currentNode.left;

              if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.right;
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.right;
              };
            }
          }
          // option 3: right child that has a left child
          else {
            // find the right child's leftmost chile
            let leftmost = currentNode.right.left;
            let leftmostParent = currentNode.right;
            while (leftmost.left !== null) {
              leftmostParent = leftmost;
              letmost = leftmost.left;
            }

            // leftmost parent's left subtree is now leftmost's right subtree
            leftmostParent.left = leftmost.right;
            leftmost.left = currentNode.left;
            leftmost.right = currentNode.right;

            if (parentNode === null) {
              this.root = leftmost;
            } else {
              if (currentNode.value < parentNode.value) {
                parentNode.left = leftmost;
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = leftmost;
              };
            }
          }
        }
      }

      return this;
    };



  };
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  breadthFirstSearchRecursive(queue, list) {
    if (!queue.length) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchRecursive(queue, list);
  }

  DFSInOrder() {
    return traverseInOrder(this.root, []);
  }
  DFSPostOrder() {
    return traversePostOrder(this.root, []);
  }
  DFSPreOrder() {
    return traversePreOrder(this.root, []);
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
};

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}

function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}



//     9
//  4   20
// 1 6 15 170
tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
// tree.remove(20);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree);
console.log(tree.breadthFirstSearch());
console.log(tree.breadthFirstSearchRecursive([tree.root], []));
console.log(tree.DFSInOrder());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());



// for (let i = 1; i < 10; i++) {
//   console.log(tree.lookup(i));
// }