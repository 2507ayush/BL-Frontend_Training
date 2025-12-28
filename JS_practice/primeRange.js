const prompt = require("prompt-sync")();

let start = Number(prompt("Enter a Start limit"));
let end = Number(prompt("Enter a Start limit"));

if(isNaN(start) || isNaN(end) || start>end){
    console.log("Please enter a valid range");
}
else{
    console.log(`Prime numbers between ${start} and ${end}`);
    for(let n=start;n<=end;n++){
        if(n<=1) continue;
        let isPrime=true;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
                if (isPrime) {
            console.log(n);
        }

    }
}