function removeDuplicates(arr) {
    if(arr.length === 0) return 0;
    let k=0;

    for(let i=1;i<arr.length;i++){
        if(arr[i] !== arr[k]){
            k++;
            arr[k] = arr[i];
        }
    }
    return k+1;
}


// Test case
const nums = [1, 1, 2, 3, 4, 5, 5];
const newLength = removeDuplicates(nums);
console.log(newLength); // Output: 5
console.log(nums.slice(0, newLength)); // Shows: [1, 2, 3, 4, 5]


