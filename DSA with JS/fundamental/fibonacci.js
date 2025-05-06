function getFibonacciSequence(num){
    let arr = [];
    if(num==0){
        arr.push(0);
        return arr;
    }
    if(num==1){
        arr.push(1);
        return arr
    }
    let a = 0;
    let b = 1;
    let sum = a;
    while(num>sum){
        arr.push(sum)
        sum = a+b;
        b = a;
        a = sum;
    }
    return arr
}


let ans = getFibonacciSequence(10);
console.log(ans)