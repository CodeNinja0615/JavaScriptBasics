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

}

let list = new LinkedList();

list.insertAtBeginning(10);
list.insertAtBeginning(20);
list.insertAtBeginning(30);
list.insertAtBeginning(40);
list.insertAtBeginning(50);

console.log(list);
list.print()

/*
Interview questions:

Reverse Linked List

Detect Loop

Find Middle

Merge Two Lists

Remove Nth Node

Palindrome Linked List
*/

/*
🎯 Your Task (Step 1 Practice)

Create a LinkedList.

Insert 3 values at beginning.

Print them.

Draw the memory structure on paper.

Do this first.

Next class we will cover:
➡ Insert at End
➡ Insert at Position
➡ Delete Node
➡ Length
➡ Time Complexity
➡ Singly vs Doubly
 */