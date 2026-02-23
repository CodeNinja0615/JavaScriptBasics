let set1 = new Set();
console.log(set1);  // Set(0) {}

let set2 = new Set([1, 2, 3, 4]);
console.log(set2);  // Set(4) {1, 2, 3, 4}˜

set2.add(1);
console.log(set2);  // Set(4) {1, 2, 3, 4}˜ // duplicate ignored

set2.add(5);
console.log(set2);  // Set(4) {1, 2, 3, 4, 5}˜


console.log(set2.has(10));
console.log(set2.has(1));

set1.add(1)
set1.add(3)
set1.add(5)
set1.add(6)
console.log(set1);
// console.log(set1.size);
// set1.delete(3)
// console.log(set1);
// set1.clear()
// console.log(set1);

// for (let value of set2) {
//     console.log(value);
// }
// set1.forEach((value) => {
//     console.log(value);
// });

// let arr = [1, 2, 2, 3, 4, 4];

// let unique = new Set(arr);

// console.log(unique); 
// // Set(4) {1, 2, 3, 4}

// let uniqueArr = [...new Set(arr)];
// console.log(uniqueArr);  // [1, 2, 3, 4]


//-----------Advanced concepts--------------//


const union = set1.union(set2);
console.log('this union', union)

const intersection = set1.intersection(set2);
console.log('this intersection', intersection)

const difference = set1.difference(set2);
console.log('this difference', difference)

const symmetricDifference = set1.symmetricDifference(set2);
console.log('this symmetricDifference', symmetricDifference)

const isSubsetOf = set1.isSubsetOf(set2);
console.log('this isSubsetOf', isSubsetOf)

const isSupersetOf = set1.isSupersetOf(set2);
console.log('this isSupersetOf', isSupersetOf)

