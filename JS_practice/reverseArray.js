const prompt = require("prompt-sync")();

let n = Number(prompt("Enter length of array: "));

if(isNaN(n) || n<0){
    console.log("Please enter a valid non-negative number.");
}

let arr = [];
for(let i=0; i<n; i++){
    let element = Number(prompt("Enter element = " ));
    arr.push(element);
}

while(n>0){
    console.log(arr[n-1]);
    n--;
}
