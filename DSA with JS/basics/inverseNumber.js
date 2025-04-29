
function inverseNumber(num){
    num = String(num);
    console.log(num.length)
    let ans = ""
    for(let i=num.length-1;i>=0;i--){
        ans = ans+num[i];
    }
    return Number(ans);
}


const ans = inverseNumber(12.34);
console.log(ans)

192.168.240.131:2221