const character = "monarch";
console.log(character);

const inputs = document.querySelectorAll("input");
inputs.forEach((input) => console.log(input));

// Lesson 3

let a = "a";
let age = 13;
//  chagne a 
a = "b";
// change age
age = 14;
// congraulations
console.log(a);
console.log(age);
const circumferencesCircle = (diameter : number) => {
    return Math.PI * diameter;
}
console.log(circumferencesCircle(10));