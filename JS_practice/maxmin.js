// Write a program that reads 5 Random 3 Digit values and then outputs the minimum
// and the maximum value
let arr = [];
for(var i=0;i<5;i++){
    let num = Math.floor(Math.random()*900)+100;
    arr.push(num);
}
arr.sort((a,b) => b-a);

let max = arr[arr.length-1];
let min = arr[0];
console.log(arr);
console.log(max);
console.log(min);
