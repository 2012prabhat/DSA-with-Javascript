function findNum(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]=== target) return i;
    }
    return -1
}

console.log(findNum([1,2,3,4,5],2));