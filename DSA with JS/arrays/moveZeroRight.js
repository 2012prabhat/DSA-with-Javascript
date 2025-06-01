function moveZeroRight(arr){
    i = arr.length-1;
    j = arr.length-1;
    while(i!=0){
        if(arr[i]==0){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j--;
        }
        i--;
    }
    return arr;
}

console.log(moveZeroRight([1,2,3,0,0,3,0,4,5,0,4,0,3,0,2]))