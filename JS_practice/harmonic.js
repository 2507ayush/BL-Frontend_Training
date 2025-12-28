const prompt = require("prompt-sync")();

let n = Number(prompt("Enter Nth value:"));

if(isNaN(n) || n<0){
    console.log("Enter valid input");
}
else{
    let h=0;
    for(let i=1;i<n;i++){
        h += 1/i;
    }
    console.log(`${n}th Harmonic number:`,h);
}