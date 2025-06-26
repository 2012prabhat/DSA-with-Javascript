function leftRotateByK(arr,k){

k = k % arr.length
for(let i=0;i<arr.length;i++){
    temp[i] = arr[(i + k) % arr.length];
}
    return temp;
}



let arr = [1,2,3,4,5,6];
let k = 2;
let temp = new Array(arr.length);
console.log(leftRotateByK(arr,k));



