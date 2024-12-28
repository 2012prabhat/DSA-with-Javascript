// Problem Statement: Sum of Two Arrays
// You are given two arrays of integers, arr1 and arr2, of equal length n. Your task is to calculate the sum of the corresponding elements from both arrays, creating a new array result.

// Input:
// Two arrays, arr1 and arr2, of length n (1 ≤ n ≤ 10^6), where each element is an integer (-10^9 ≤ arr1[i], arr2[i] ≤ 10^9).
// Output:
// A new array, result, of length n, where result[i] is the sum of arr1[i] and arr2[i].


const sum2Arrays = (arr1, arr2) => {
    let resArr = [];
    if (arr1.length === 0 || arr2.length === 0) {
        throw new Error("Array should not be empty");
    }
    if (arr1.length !== arr2.length) {
        throw new Error("Length of arrays should be equal");
    }
    for (let i = 0; i < arr1.length; i++) {
        resArr[i] = arr1[i] + arr2[i];
    }
    return resArr;
};

let arr1 = [1, 2, 3, 4, 5, 2];
let arr2 = [5, 4, 3, 2, 1,6];
console.log(`Sum of two arrays: [${sum2Arrays(arr1, arr2)}]`);

/**
 * Time Complexity:
 * - The function loops through both arrays once, with each array having a length of `n`.
 * - The loop runs `n` times, where `n` is the length of the arrays, resulting in a time complexity of O(n).
 *
 * Space Complexity:
 * - The function creates a new array `resArr` to store the result, which has the same length as the input arrays.
 * - Therefore, the space complexity is O(n), where `n` is the length of the arrays.
 */