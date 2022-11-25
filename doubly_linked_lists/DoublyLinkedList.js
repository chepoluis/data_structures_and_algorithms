import Node from './Node.js'; 

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    pop() {
        if (this.length === 0) return undefined;

        const temp = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        
        this.length--;

        return temp;   
    }

    unshift(value) {
        const newNode = new Node(value);

        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;

        return this;
    }

    shift() {
        if (this.length === 0) return undefined;

        const temp = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = temp.next;
            this.head.prev = null;
            temp.next = null;
        }
        
        this.length--;
        return temp;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;

        let result = this.head;

        if (index < this.length / 2) {
            for (let i = 0; i < index; i++) {
                result = result.next;
            }
        } else {
            result = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                result = result.prev;
            }
        }

        return result;
    }

    set(index, value) {
        let result = this.get(index);

        if (result) {
            result.value = value;

            return true;
        }
        
        return false;
    }
}

window.doublyLL = new DoublyLinkedList(0);
doublyLL.push(1)
doublyLL.push(2)
