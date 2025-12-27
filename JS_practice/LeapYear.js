const prompt = require("prompt-sync")();
let year = Number(prompt("Eneter year:"));
let isLeap = false;
if(year %4  ===0){
    isLeap = true;
}
console.log(isLeap);
