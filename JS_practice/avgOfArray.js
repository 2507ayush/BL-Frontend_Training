const prompt = require("prompt-sync")();

let x = Number(prompt("Enter length of an Array :"));
let arr = Array.of(x);

for(var i=0;i<x;i++){
    var z = Number(prompt("Enter Elements of Array:"));
    arr.push(z);
}

var sum = 0;
for(var y=0;y<x;y++){
    sum += arr.pop(y);
}
let avg = sum/x;

console.log(avg);
