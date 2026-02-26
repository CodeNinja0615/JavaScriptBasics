let str = " Sameer";

//slicing between 2 inddices
let new_str = str.slice(2, 4);
console.log(`.slice example: ${new_str}`);

//getting the character at a specific index
let charAt = str.charAt(3);
console.log(`.charAt example: ${charAt}`);

// split a  string
let splittedStr = str.split("a")[1];
let splittedStr1 = str.split("a")[0];
console.log(`.split example: ${splittedStr}${splittedStr1}`);

//changing from string to number
var num1 = "27";
num1 = parseInt(num1);
console.log(`Parsing example: ${typeof num1}`);

//concatinating
let count = 0;
var strNew = "Friday";
var newStr = strNew + "is funday";

// var value = newStr.indexOf("day", 5); // 5 menas to start search from 5th index return -1 when not found
var value = newStr.indexOf("day");
while (value !== -1) {
  count++;
  value = newStr.indexOf("day", value + 1);
}
console.log(count);
