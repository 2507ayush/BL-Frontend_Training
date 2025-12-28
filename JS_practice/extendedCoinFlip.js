let headsCount = 0;
let tailsCount = 0;
while (headsCount < 11 && tailsCount < 11) {
    let flip = Math.random() < 0.5 ? "Heads" : "Tails";

    if (flip === "Heads") {
        headsCount++;
    } else {
        tailsCount++;
    }
}

if (headsCount === 11) {
    console.log("Heads wins 11 times!");
} else {
    console.log("Tails wins 11 times!");
}
