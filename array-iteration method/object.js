// object is a collection of key-value pairs
// used tp multiple value in a single variable 



const person = {
    name:'avanthika',
    age:21,
    isstudent:true 
}

console.log(person.name);
console.log(person["age"]);

// add or modify data's


person.city = "kozhikode";
person.age = 34;                                                       



delete person.city;
console.log(person);




