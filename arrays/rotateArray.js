let arr = [10,12,34,5,43,21,34];
let k = 2

const rotateArray = (arr,k)=>{
    for(let j=0;j<k;j++){
    let temp = arr[0];
    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = temp;
    }
    return arr
}


console.log(`Rotated array by ${k} times is [${rotateArray(arr,k)}]`);


//optimal solution 
const rightRotateInPlace = (arr, k) => {
    k = k % arr.length;

    // Reverse the entire array
    arr.reverse();

    // Reverse the first k elements
    reverse(arr, 0, k - 1);

    // Reverse the rest of the array
    reverse(arr, k, arr.length - 1);

    return arr;
};

const reverse = (arr, start, end) => {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
};

const arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(rightRotateInPlace(arr2, 3));