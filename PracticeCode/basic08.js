import Person from './basic07.js'

class Pet extends Person{

    constructor(firstName, lastName){
        super(firstName, lastName)

    }
    get location(){
        return "Allahabad"
    }
}

new Pet("Sameer","Akhtar").fullName()