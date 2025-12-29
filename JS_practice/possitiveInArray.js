const prompt = require("prompt-sync")();

let x = Number(prompt("Enter length of an Array :"));
let arr = Array.of(x);

for(var i=0;i<x;i++){
    var z = Number(prompt("Enter Elements of Array:"));
    arr.push(z);
}

function possitive(n){
    if(n<=0){
    }
    else {
        return n;
    }
}

let r = [];
for(let i=0;i<x;i++){
    var res = possitive(arr.pop(x));
    r.push(res);
}

console.log(r);
