const prompt = require("prompt-sync")();

console.log("Think of a number between 1 and 100.");

let low = 1;
let high = 100;

while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let response = prompt(
        `Is your number ${mid}? 
Enter:
  'l' if your number is less than ${mid}
  'g' if your number is greater than ${mid}
  'y' if ${mid} is your number: `
    );

    if (response === "y") {
        console.log(`🎉 Magic Number Found: ${mid}`);
        break;
    } else if (response === "l") {
        high = mid - 1;
    } else if (response === "g") {
        low = mid + 1;
    } else {
        console.log("Invalid input. Please enter l, g, or y.");
    }
}
