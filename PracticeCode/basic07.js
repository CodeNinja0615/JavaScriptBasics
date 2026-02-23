class Person {
    age = 23
    // name = "Sameer" // Still works becuase of thi.name in constructor
    constructor(firstName, lastName) {
        this.name = firstName + lastName
    }

    fullName() {
        console.log(this.name)
    }

    get location() { // a getter property not a function
        return "India"
    }

}

// let person = new Person("Sameer ", "Akhtar")
// console.log(person.name)
// console.log(person.location)
// person.fullName()
// module.exports = Person //to export (can directly be put before class definition)
export default Person;