const prompt = require("prompt-sync")();
let date = Number(prompt("Enter Day of month:"));
let month = Number(prompt("Enter Month:"));

let isValid = false;

if(
    (month===3 && date>=20) ||
    (month === 4) ||
    (month === 5) ||
    (month === 6 && date <=20)
){
    isValid=true;
}
console.log(isValid);
