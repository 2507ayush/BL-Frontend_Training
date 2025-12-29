const convert = (temp) => temp * 1.8 + 32;

const prompt = require("prompt-sync")();

let temp = Number(prompt("Enter the temperature in Celcius :"));

console.log(convert(temp));

