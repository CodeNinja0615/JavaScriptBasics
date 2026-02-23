// [10 | • ] → [20 | • ] → [30 | null]
export class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// let node1 = new Node([1, 2, 3, 4]);
// let node2 = new Node([5, 6, 7, 8]);
// let node3 = new Node([30, 32, 31]);

// node1.next = node2;
// node2.next = node3;

// console.log(node1);