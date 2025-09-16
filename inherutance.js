// one class can inherit properties a methods from in an another class


//base
class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a sound`);
        
    }
}


//derived class inherits from animal 
class Dog extends Animal{
    constructor(name, breed){
        super(name); //call the parantclass construction
        this.breed = breed;
    }
//override speak method 
    speak(){
        console.log(`${this.name} barks`);
        
    }
}

const dog = new Dog("rex", "germen shepherd")
dog.speak();