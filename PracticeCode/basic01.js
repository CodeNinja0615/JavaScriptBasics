// const Person = require("./basic07") //to import
import Person from './basic07.js'

console.log("Hello World");

let a = 4; // can use var for engines before ES6 version(remember: cannot redeclare variable with let keyword)
console.log(a);
console.log(typeof(a));

let person = new Person("Sameer ", "Akhtar")
console.log(person.name)
console.log(person.location)
person.fullName()