// Problem Statement
// Write a function findElement(arr, target) that takes an array of integers arr and an integer target as input. The function should determine whether the target element exists in the array and return its index if found, or -1 if not found.

// Input Format
// An array of integers, arr (e.g., [3, 5, 7, 9, 11]).
// An integer, target, representing the element to search for.

// Expected Output
// Return the index of the target element if it exists in the array; otherwise, return -1.


// linear Search
const findInArr = (arr,n)=>{
    if (arr.length === 0) return -1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===n) return i
    }
    return -1;
}


let arr = [23,43,12,54,64,76,86,45];
let num = 64;
console.log(`Current index of the element is ${findInArr(arr,num)}`)



// Time Complexity
// •	Best Case: O(1)
// If the target element is the first element in the array, the loop exits immediately.
// •	Worst Case: O(n)
// If the target element is at the end of the array or does not exist, the loop iterates through all nnn elements.
// •	Average Case: O(n)
// On average, the function will check half the elements in the array.

// Space Complexity
// O(1)
// The algorithm uses a constant amount of extra space, as it only stores a few variables (i and n).



