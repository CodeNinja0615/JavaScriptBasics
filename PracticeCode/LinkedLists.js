import { Node } from "./Node.js";

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtBeginning(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    print() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    insertAtEnd(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    insertAtPosition(data, position) {
        let newNode = new Node(data);

        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        let index = 0;

        while (current !== null && index < position - 1) {
            current = current.next;
            index++;
        }

        if (current === null) {
            console.log("Position out of bounds");
            return;
        }

        newNode.next = current.next;
        current.next = newNode;
    }

    deleteByValue(value) {

        if (this.head === null) return;

        if (this.head.data === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;

        while (current.next !== null && current.next.data !== value) {
            current = current.next;
        }

        if (current.next === null) {
            console.log("Value not found");
            return;
        }

        current.next = current.next.next;
    }

    length() {
        let count = 0;
        let current = this.head;

        while (current !== null) {
            count++;
            current = current.next;
        }

        return count;
    }
}

let list = new LinkedList();

list.insertAtBeginning(10);
list.insertAtBeginning(20);
list.insertAtBeginning(30);
list.insertAtBeginning(40);
list.insertAtBeginning(50);

list.insertAtEnd(35);

list.insertAtPosition(21, 2)

list.deleteByValue(30);

console.log(list);
list.print();
console.log(list.length());
