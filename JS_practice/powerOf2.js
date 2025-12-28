const prompt = require("prompt-sync")();

let n = Number(prompt("Enter num:"));
if(isNaN(n) || n<0){
    console.log("Enter a valid number");
}
else{
    let i=1;
    while(i<n){
        console.log(Math.pow(2,i));
        i++;
    }
}