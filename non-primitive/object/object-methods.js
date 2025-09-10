//you can store function inside objects- these are called objectmetods


const car = {
    brand:"toyota",
    start: function(){
        console.log("car started");
        
    }
}
car.start();



// this keyword - its refers the object its self.9'used to access properties 

const person = {
    name:"avanthika",
    age:20,
    greet: function(){
        console.log(`hello, my name is ${this.name}`);
        
    }
}
person.greet();