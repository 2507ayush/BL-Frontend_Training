const prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number:"));

if(isNaN(n) || n<0){
    console.log("Enter a valid number");
}
else{
    let i=0;
    while(i<=n && Math.pow(2,i)<=256){
        console.log(Math.pow(2,i));
        i++;
    }
}