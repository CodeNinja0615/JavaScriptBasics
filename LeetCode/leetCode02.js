/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let n1 = "", n2 = "", arr = [];
    for (let i in l1.reverse()) {
        n1 += l1[i];
    }
    for (let i in l2.reverse()) {
        n2 += l2[i];
    }
    sum = parseInt(n1) + parseInt(n2)
    for (let i in sum.toString()) {
        arr.push(parseInt(sum.toString()[i]))
    }
    console.log(arr.reverse())
};

addTwoNumbers([2, 4, 3], [5, 6, 4])
