const prompt = require("prompt-sync")();

let str = prompt("Enter a string: ");

let reversedStr = "";
let l = str.length;
while(l>0){
    let char = str.charAt(l-1);
    reversedStr += char;
    l--;
}
console.log("Reversed string is: " + reversedStr);