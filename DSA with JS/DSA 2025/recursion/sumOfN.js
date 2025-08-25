function sumTillN(n){
    if(n==1){
        return 1;
    }
    return n + sumTillN(n-1)
    sumTillN(n)

}


console.log(sumTillN(5));