//Ways declare a Array
var marks = Array(5);
// marks = [20, 30, 40 ,50, 55]
// var marks = new Array(20, 30, 40 ,50, 55)

//best way to declare Array, most preffered
var marks = [20, 30, 40, 50, 50];
//console.log(marks[0])
// console.log(marks.sort().reverse())

//calling specific index
// console.log(marks[3])

//Reassign a value toa a specific index
marks[3] = 34;
//console.log(marks[3])

marks.push(25); //-Adds element in the end
marks.unshift(12); //-Adds elemnt in the beggining
console.log(`.push and .unshift example: ${marks}`);

//removes the last element of the Array
console.log(`.pop example the num the will be removed is: ${marks.pop()}`);
// marks.pop()

//--Foreach in js Example
// marks.forEach(element => {
//     console.log(element)
// })

//---reduce
//can use directly without declaring variable
var total = marks.reduce((sum, iteration) => sum + iteration, 0); //---0 is sum value like let sum = 0 and iteration is like marks[i]
console.log(`.reduce example: ${total}`);

// var even_number = []
// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] % 2 == 0) {
//         even_number.push(marks[i])
//     }
// }
// console.log(even_number)

//----filter
var filteredMarks = marks.filter((score) => score % 2 == 0); //----Use reduce when iterating and updating values and use filter when need filterd values based of a condition
console.log(`.filte example: ${filteredMarks}`);

//----map
let multiply_by_3 = filteredMarks.map((value) => value * 3);
console.log(`.map example: ${multiply_by_3}`);

// can also make chain for ex:
// arr.filter().map().reduce()

// map(function(a,b){ return a-b }) // another way of doing map((a,b)=> a-b)

//---sort
var sorted_value = filteredMarks.sort();

//---bubble sorting in recurrsive manner
var new_sorted_value = filteredMarks.sort(function (a, b) {
  return a - b;
});

console.log(`.sort example: ${sorted_value}`);
console.log(`bubble sorting example: ${new_sorted_value}`);

//sort array having Strings in descending order
let fruits = ["banana", "mango", "pomegranate", "apple"];
console.log(fruits.sort((a, b) => b.localeCompare(a)));
console.log(fruits);
console.log(fruits.sort());
