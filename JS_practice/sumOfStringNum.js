const prompt = require("prompt-sync")();

let number = prompt("Enter a number: ");
number = number.trim();
let number2 = prompt("Enter another number:");
number2 = number2.trim();

let n1 = Number(number);
let n2 = Number(number2);;

const add = (a,b) => a+b;

console.log(add(n1,n2));