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

// lesson 4

let arr = ['1','2', '3', '4', '5'];
arr.push('6');
// arr.push(1351)
console.log(arr);

let arr2 = [1,'2',3,4,'5'];
arr2.push(6);
arr2.push('7');
console.log(arr2);

let obj1 = {
    name: "John",
    age: 23,
    address: "123 Main Street"
}
obj1 = {
    name: "John",
    age: 23,
    address: "123 Main Street"
    // phoneNumber : 1385183031
}