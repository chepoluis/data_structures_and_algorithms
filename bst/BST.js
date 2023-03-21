import Node from './Node.js';

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let temp = this.root;

        while(true) {
            // Repeated value
            if (newNode.value === temp.value) return undefined;

            // Left
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;

                    return this;
                }

                temp = temp.left;
            } else { // Right
                if (temp.right === null) {
                    temp.right = newNode;

                    return this;
                }

                temp = temp.right;
            }
        }
    }
}

window.bst = new BST();
bst.insert(47);
bst.insert(21);
bst.insert(76);
bst.insert(18);