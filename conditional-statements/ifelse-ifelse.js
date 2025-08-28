
const prompt = require ('prompt-sync')();
let score  = prompt ("enter  the score ");



if (score >= 90) {
    console.log("grage: A");

} else if (score >= 80) {
    console.log("grade: B");

} else if (score >= 60) {
    console.log("grade: c");

} else {
    console.log("grade: f");

}