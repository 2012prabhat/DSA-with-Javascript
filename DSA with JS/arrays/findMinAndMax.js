// const prompt = require('prompt-sync')();
// const arr = JSON.parse(prompt('Enter the arr'));
const arr = [1,2,3,34,4,5,6,76,76,96,-5,12,7,67]

if (arr.length === 0) {
    console.log("Array is empty");
    return; // or throw error
}

let max = -Infinity;
let min = Infinity;

for(let i=0;i<arr.length;i++){
    if(arr[i]>max) max = arr[i];
    if(arr[i]<min) min = arr[i];
}

console.log("Max is ",max)
console.log("Min is ",min)