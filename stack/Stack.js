import { Node } from "./Node.js";

// LIFO: Last In First Out
class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }

        this.length++;

        return this;
    }

    pop() {
        if (this.length === 0) return undefined;

        const temp = this.top;

        this.top = temp.next;
        temp.next = null;

        this.length--;

        return temp;
    }
}

window.stack = new Stack(7);
stack.push(1);
stack.push(2);