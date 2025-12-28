const prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number:"));

if(isNaN(n) || n<=1){
    console.log("Enter a valid number");
}
else{
    let c=0;
    for(let i=1;i<=n;i++){
        if(n%i===0){
            c++;
        }
    }
    if(c===2){
        console.log("prime number");
    }
    else{
        console.log("not prime");
    }
}