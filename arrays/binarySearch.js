let arr = [1,2,3,4,5,6,7,8]; // sorted arr
let num = 8;

// using binary serach
const findInArr = (arr,num)=>{
    let low = 0;
    let high = arr.length-1;
    while(low <= high){
       let mid = Math.floor((low+high)/2);
       if(arr[mid]===num) return mid;
       else if(num>arr[mid]){
            low = mid+1
       }else{
        high = mid-1;
       }
    }
    return -1;
}

console.log(`Element found at index ${findInArr(arr,num)}`)


// ### Time Complexity of Binary Search

// 1. Best Case:  
//    O(1)  
//    - This happens when the target element is found at the middle index on the first iteration.

// 2. Worst Case:  
//    O(log n)  
//    - In each iteration, the search space is halved. For an array of size n, 
//      the number of iterations required is proportional to log_2(n).

// 3. Average Case:  
//    O(log n)  
//    - On average, the algorithm will perform approximately log_2(n) comparisons.

// --- 

// ### Space Complexity of Binary Search

// 1. Iterative Implementation:  
//    O(1)  
//    - The algorithm uses a constant amount of space to store variables like `low`, `high`, and `mid`.

// 2. Recursive Implementation:  
//    O(log n)  
//    - In the recursive version, the function calls itself, and each call adds a new frame to the call stack. 
//      In the worst case, there are log_2(n) recursive calls.

// ---

// ### Summary Table

// | Implementation         | Time Complexity | Space Complexity |
// |-------------------------|-----------------|-------------------|
// | Iterative Binary Search | O(log n)        | O(1)              |
// | Recursive Binary Search | O(log n)        | O(log n)          |

// ---

// ### Why Binary Search is Efficient
// - By halving the search space with each iteration, the number of comparisons grows logarithmically with the size of the array.
// - This makes binary search much faster than linear search (O(n)) for large datasets, provided the array is sorted.





