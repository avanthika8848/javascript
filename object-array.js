const students = [
    {name:"avanthika", age:20,grade:"A"},
    {name:"hima", age:21,grade:"A"},
    {name:"vyshna", age:25, grade:"B"}
]

console.log(students[0].name);
console.log(students[1].grade);
console.log(students[2].age);


//looping through object array

students.forEach(stdnt=> {
    console.log(`${stdnt.name} is ${stdnt.age} years old.`);
    
})

