function countFrequency(arr) {
    let result = {}
    for(let i=0;i<arr.length;i++){
        if(result[arr[i]] !== undefined){
            result[arr[i]] += 1;
        }else{
            result[arr[i]] = 1
        }
    }
    return result
}
console.log(countFrequency([1, 2, 2, 3, 1, 4,3, 2]));