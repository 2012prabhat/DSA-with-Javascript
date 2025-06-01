function moveNegativeLeft(arr){
    i = 0;
    j = 0;
    while(i!=arr.length){
        if(arr[i]<0){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
        i++;
    }
    return arr;
}



console.log(moveNegativeLeft([1,2,-3,4,5,-6,-7,8,9,-19,11,-9]));

