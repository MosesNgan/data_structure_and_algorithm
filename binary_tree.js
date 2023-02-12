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
      console.log(`Found target node with value ${value}.`)
      console.log('Before removal:')
      console.log(this);
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


      console.log('After removal:')
      console.log(this);
      console.log('---------------------------------------------');

      return this;
    }

  };
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
};


//     9
//  4   20
// 1 6 15 170
tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
console.log(tree.remove(20));
// tree.insert(1);
// tree.insert(6);
// tree.insert(15);
// tree.insert(170);
console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree);


// for (let i = 1; i < 10; i++) {
//   console.log(tree.lookup(i));
// }