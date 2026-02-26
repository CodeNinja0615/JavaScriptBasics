//creating a function
function Add(a, b) {
    return a + b
}
var sum = Add(2, 3)
console.log(sum)

//Another way of creating a function
let sum_of_numbers = function (c, d) {
    return c + d
}
console.log(sum_of_numbers(2, 4))

//creating a lambda
let sum_of_numbers_new = (c, d) => c + d
console.log(sum_of_numbers_new(2, 4))