function isPrime(num){
    if(num<2) return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false;          
        }
    }
    return true
}


function getPrimeNumbers(k){
    let numArr = [];
    let i=0;
    while(i<k){
        if(isPrime(i)){
            numArr.push(i);
        }
        i++;
    }
    return numArr;
}


let result = getPrimeNumbers(13);
console.log(result)