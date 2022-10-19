import { Node } from "./Node.js"; // Don't forget to add .js

export class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        // this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        // 1. Create a new node
        const newNode = new Node(value);

        // If there is no node, point head and tail to the new node
        if (!this.head) {
            // Remember that head and tail are nodes :)
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        
        // Return the entire LinkedList
        return this;
    }

    pop() {
        // If we have 0 items return undefined
        if (!this.head) return undefined;

        let temp = this.head, pre = this.head;

        // Case for more than 1 item
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;

        // Case for 1 item
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        // Return the deleted node
        return temp;
    }
}

const linkedList = new LinkedList(5);
linkedList.push(2);
// linkedList.push(9);
// linkedList.push(7);

// linkedList.pop()
// console.log('Pop: ', linkedList.pop());
linkedList.pop()


console.log(linkedList);