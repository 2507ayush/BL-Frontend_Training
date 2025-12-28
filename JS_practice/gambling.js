let money = 100;
let goal = 200;
let bets = 0;
let wins = 0;

while (money > 0 && money < goal) {
    bets++;

    if (Math.random() < 0.5) {
        money++;
        wins++;
    } else {
        money--;
    }
}

console.log("Gambler Result:");
console.log("Total Bets Made:", bets);
console.log("Total Wins:", wins);
console.log("Final Amount: Rs", money);

if (money === goal) {
    console.log("Gambler reached the goal of Rs 200");
} else {
    console.log("Gambler went broke");
}
