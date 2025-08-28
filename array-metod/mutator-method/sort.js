

let num =[10, 1, 21,2]
num.sort();
console.log(num);


// numeric sort ascending order
let numbers1 = [4,2,5,1,3];
numbers1.sort((a,b) => a - b);
console.log('numbers in ascending order:' , numbers1);


// numeric sort decending order
let numbers2 = [4,2,5,1,3];
numbers2.sort((a,b) => b - a);
console.log('numbers in decending order: ',numbers2);

// default string sort (ascending)
let fruits = ['banana', 'apple', 'dates','cherry'];
fruits.sort();
console.log(fruits);


//descending order for string 
let fruits2 = ['banana', 'apple', 'dates', 'cherry'];
fruits2.sort((a,b)=> b.localeCompare(a));
console.log(fruits);
