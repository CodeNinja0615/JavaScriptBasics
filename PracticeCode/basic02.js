var marks = Array(5)
// marks = [20, 30, 40 ,50, 55]

// var marks = new Array(20, 30, 40 ,50, 55)

var marks = [20, 30, 40, 50, 55]

console.log(marks[0])
// console.log(marks.sort().reverse())

// console.log(marks[3])
marks[3] = 34
// console.log(marks[3])

marks.push(39) //-Adds element in the end
marks.unshift(12) //-Adds elemnt in the beggining
// console.log(marks)
// console.log(marks.pop())
// marks.pop()

// marks.forEach(element => { //--Foreach in js
//     console.log(element)
// })

//---reduce
// var total = marks.reduce((sum, iteration) => sum + iteration, 0) //---0 is sum value like let sum = 0 and iteration is like marks[i]
// console.log(total)

// var even_number = []
// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] % 2 == 0) {
//         even_number.push(marks[i])
//     }
// }
// console.log(even_number)

//----filter
var filteredMarks = marks.filter(score => score % 2 == 0)//----Use reduce when iterating and updating values and use filter when need filterd values based of a condition
console.log(filteredMarks)


//----map
// let multiply_by_3 = filteredMarks.map(value => value * 3)
// console.log(multiply_by_3)


// can also make chain for ex. arr.filter().map().reduce()
// map(function(a,b){ return a-b }) // another way of doing map((a,b)=> a-b)

var sorted_value = filteredMarks.sort()
var new_sorted_value = filteredMarks.sort(function (a, b) { //---bubble sorting in recurrsive manner
    return a - b
})

console.log(sorted_value)
console.log(new_sorted_value)


//sort array having Strings in descending order
let fruits = ["banana", "mango", "pomegranate", "apple"];
console.log(fruits.sort((a, b) => b.localeCompare(a)));
console.log(fruits);
console.log(fruits.sort());
