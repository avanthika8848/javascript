const person = {name: "avanthika", age : 20, country:"india"}

//basic destructurig

const {name , age} = person;
console.log(name);
console.log(age);

//rename variables
const {country:nation} = person;
console.log("nation:", nation);

//defualt value 
const {gender = 'female'} = person;
console.log(gender);

