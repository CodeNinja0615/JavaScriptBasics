import Person from './basic07.js'

//Inheritance Concept
class Pet extends Person{

    constructor(firstName, lastName){
        //sends tthe balue to the inherited class constructor
        super(firstName, lastName)

    }
    
    get location(){
        return "Allahabad"
    }
}

new Pet("Sameer","Akhtar").fullName()