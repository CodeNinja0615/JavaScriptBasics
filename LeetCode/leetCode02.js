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
    let list1 = [], list2 = [];

    while (l1.next != null) {
        list1.push(l1.data);
        l1 = l1.next;
    }
    while (l2.next != null) {
        list2.push(l2.data);
        l2 = l2.next;
    }
    let n1 = "", n2 = "", arr = [];
    for (let i in list1.reverse()) {
        n1 += list1[i];
    }
    for (let i in list2.reverse()) {
        n2 += list2[i];
    }
    sum = parseInt(n1) + parseInt(n2)
    for (let i in sum.toString()) {
        arr.push(parseInt(sum.toString()[i]))
    }
    return arr;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))
