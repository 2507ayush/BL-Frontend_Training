const prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number to find the sum of its digits: "));

if(n<0){
    console.log("Please enter a non-negative integer.");    
}

var s=0;
while(n>0){
    let digit = n % 10;
    s += digit;
    n = Math.floor(n / 10);
}
console.log("Sum of digits:", s);