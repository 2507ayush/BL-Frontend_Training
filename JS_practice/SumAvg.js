let arr = [];
for(var i=0;i<5;i++){
    let num = Math.floor(Math.random()*90)+10;
    arr.push(num);
}
let sum = 0;
for (let num of arr) {
    sum += num;
}
let avg = sum/arr.length;

console.log(arr);
console.log("Sum:", sum);
console.log("Average:",avg);
