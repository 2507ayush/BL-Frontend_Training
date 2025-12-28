const prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number:"));

if(isNaN(n) || n<0){
    console.log("Enter a valid number");
}
else{
    let f=1;
    for(let i=1;i<=n;i++){
        f=f*i;        
    }
    console.log(f);
}