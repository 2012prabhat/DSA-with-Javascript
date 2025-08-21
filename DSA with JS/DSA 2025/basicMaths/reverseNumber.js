function getReverseNum(num){
    let result = 0;
    while(num>0){
        const ld = Math.floor(num%10);
        result = result * 10 + ld;
        num = Math.floor(num/10);
    }
    return result;
}


console.log(getReverseNum(4321));