function leftRotateByK(arr,k){
k = k % arr.length
// let count = 0;
for (let index = 0; index < k; index++) {
     let firstElem = arr[0];
    for(let i=0;i<arr.length-1;i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = firstElem;
    // count++
}
//    console.log(count)
    return arr;
}



let arr = [1,2,3,4,5,6];
let k = 7;
console.log(leftRotateByK(arr,k))