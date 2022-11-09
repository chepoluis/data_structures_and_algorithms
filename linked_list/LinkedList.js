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
        // Create a new node
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

    // Add a new element to the beginning
    unshit(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this;
    }

    shift() {
        // My solution
        // if (!this.head) return undefined;

        // const removedValue = this.head;

        // if (this.length === 1) {
        //     this.head = null;
        //     this.tail = null;
        // } else {
        //     this.head = this.head.next;
        //     removedValue.next = null;
        // }

        // this.length--;

        // return removedValue;

        if (!this.head) return undefined;

        let temp = this.head;

        this.head = this.head.next;
        temp.next = null;

        this.length--;

        if (this.length === 0) this.tail = null;

        return temp;
    }

    get(index) {
        if (!this.head) return undefined;
        if (index >= this.length || index < 0) return undefined;

        let node = this.head;

        for (let i = 0; i < index; i++) {
            node = node.next;
        } 

        return node;
    }
    
    set(index, value) {
        let temp = this.get(index);

        if (temp) {
            temp.value = value;
            return true;
        }

        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;

        // Put it at the beginning of the list
        if (index === 0) return this.unshit(value);

        // Put it at the end of the list
        if (index === this.length) return this.push(value);

        const newNode = new Node(value);

        const previousNode = this.get(index - 1);
        
        // Point the newNode to the next node in the position we want to put it
        newNode.next = previousNode.next;

        previousNode.next = newNode;

        this.length++;

        return true;
        /* -------------- */

        // const newNode = new Node(value);
        
        // // TO DO: create solution for the scenario index = 0
        
        // const previousNode = this.get(index - 1);
        
        // const temp = previousNode.next;
        
        // previousNode.next = newNode;
        
        // newNode.next = temp;
        
        // this.length++;
    }
}

window.linkedList = new LinkedList(1);
window.linkedList.push(2);
window.linkedList.push(3);

console.log(linkedList);