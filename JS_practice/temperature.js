const prompt = require("prompt-sync")();

function convertTemperature(choice, value) {
    switch (choice) {
        case 1:
            if (value < 0 || value > 100) {
                return "Temperature must be between 0°C and 100°C";
            }
            return ((value * 9 / 5) + 32).toFixed(2) + " °F";

        case 2:
            if (value < 32 || value > 212) {
                return "Temperature must be between 32°F and 212°F";
            }
            return ((value - 32) * 5 / 9).toFixed(2) + " °C";

        default:
            return "Invalid choice";
    }
}

console.log("1. Celsius to Fahrenheit");
console.log("2. Fahrenheit to Celsius");

let choice = Number(prompt("Enter your choice (1 or 2): "));
let temp = Number(prompt("Enter the temperature value: "));

console.log(convertTemperature(choice, temp));
