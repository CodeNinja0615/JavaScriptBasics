let person = {
    firstName: 'Sameer',
    lastName: 'Akhtar',
    age: 23,
    fullName: function(){
        var fullName = this.firstName + this.lastName
        console.log(fullName)
    }
}
console.log(person.firstName)
console.log(person['lastName'])

person.firstName = "Kuch bhi"
console.log(person.firstName)

person.gender = "male"
console.log(person.gender)
console.log(person)
console.log('gender' in person)
delete person.gender
console.log(person)
console.log('gender' in person)

for(let key in person){
    console.log(person[key])
}

person.fullName()