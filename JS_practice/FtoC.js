const convert = (temp) => (temp - 32) * 0.5555;

const prompt = require("prompt-sync")();

let temp = Number(prompt("Enter the temperature in Farhaniet :"));

console.log(convert(temp));

