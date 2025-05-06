const countDigits = (num)=>{
    if(num==0) return 1;
    num = Math.abs(num);
    let count = 0;
    while(num!=0){
        num = Math.floor(num/10);
        count++;
    }
    return count;
}

let num = 1234;
let ans = countDigits(num);
console.log(ans)

//It should be check for num = 0 and negative numbers