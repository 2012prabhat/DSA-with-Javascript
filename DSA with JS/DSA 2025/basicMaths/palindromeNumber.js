function isPalindrome(num){
    let str = String(num);
    let left = 0;
    let right = str.length-1
    while(left<right){
        if(str[left] != str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// palindrome number without string conversion

function isPalindromeWithoutStr(num){
    let originalNum = num;
    let reversed = 0;
    while(num>0){
        let ld = num % 10;
        reversed = reversed * 10 + ld;
        num = Math.floor(num/10);
    }
    return reversed === originalNum
}


console.log(isPalindrome(12321));
console.log(isPalindromeWithoutStr(12321));