const prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number :"));

function isPrime(num){
    let c=0;
    for(let i=1;i<=num;i++){
        if(num%i === 0){
            c++;
        }
    }
    if(c === 2){
        return true;
    }
    else{
        return false;
    }
}

function toPalindrome(num){
    let rev=0;
    while(num>0){
        let d = num%10;
        rev = rev*10 + d;
        num = Math.floor(num/10);        
    }
    return rev;
}

if(isNaN(n) || n<=0){
    console.log("Invalid number");
}
else{
    if(isPrime(n)){
        let palindrome = toPalindrome(n);

        if(isPrime(palindrome)){
            console.log("the number is prime and its palindrome is prime");
        }
        else{
            console.log("the number is prime but palindrome is not prime");
        }
    }
    else{
        console.log("Number is not prime");
    }
}