function leftRotateByOne(arr) {
  let firstElem = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = firstElem;
  return arr;
}

function rightRotateByOne(arr) {
    let lastElem = arr[arr.length-1];
    for(let i = arr.length-1;i>=1;i--){
        arr[i] = arr[i-1]
    }
    arr[0] = lastElem;
    return arr;
}

console.log(leftRotateByOne([2, 3, 4, 12, 32, 45, 64, 23, 64]));
console.log(rightRotateByOne([2, 3, 4, 12, 32, 45, 64, 23, 64]));
