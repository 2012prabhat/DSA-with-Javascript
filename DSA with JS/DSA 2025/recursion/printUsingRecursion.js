function printUsingRecursion(n){
    if(n==0){
        return;
    }
    console.log("Hi am printing this using recursion");
    printUsingRecursion(n-1)
}


printUsingRecursion(5)