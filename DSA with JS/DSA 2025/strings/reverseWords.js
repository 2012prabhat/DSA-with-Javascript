const str = "...i.like.this...program.very.much.."
const result = reverseWords(str);
console.log(result)

function reverseWords(str){
    str = str.split(".").filter(word=>word.length>0);
    let left = 0;
    let right = str.length-1;
    while(left<right){
        [str[left],str[right]] = [str[right],str[left]];
        left++;
        right--;
    }
    return str.join(".");
}