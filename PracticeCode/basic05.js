let str = " Sameer"

let new_str = str.slice(2, 4)
console.log(new_str)

let charAt = str.charAt(3)
console.log(charAt)

let splittedStr = str.split("a")[0]
console.log(splittedStr.trim())


var num1 = '27'
num1 = parseInt(num1)
console.log(typeof (num1))

let count = 0
var strNew = "Friday"
var newStr = strNew + "is funday"

// var value = newStr.indexOf("day", 5); // 5 menas to start search from 5th index return -1 when not found
var value = newStr.indexOf("day");
while (value !== -1) {
    count++
    value = newStr.indexOf("day", value+1);
}
console.log(count)
