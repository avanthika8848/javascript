const prompt = require ('prompt-sync')();
let age = prompt ("enter  the age ");


// let age = 18;
let result =(age >= 18) ? "adult": "minor";
console.log(result);
