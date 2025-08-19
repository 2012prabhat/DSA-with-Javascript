function stringCompression1(str){
    let resultStr = str.charAt(0);
    for(let i=1;i<str.length;i++){
        let currChar = str.charAt(i);
        let prevChar = str.charAt(i-1);
        if(currChar !== prevChar){
            resultStr += currChar;
        }
    }
    return resultStr
}



function stringCompression2(str){
    let resultStr = str.charAt(0);
    let count = 1;
    for(let i=1;i<str.length;i++){
        let currChar = str.charAt(i);
        let prevChar = str.charAt(i-1);
        if(currChar === prevChar) {
            count++;
        }else{
            if(count>1){
                resultStr += count + currChar;
                count = 1;
            }else{
                resultStr += currChar;
            }
        }
    }
    return resultStr.length
}   



let str = "aaabbccddaeef";
// console.log(stringCompression1(str));
// console.log(stringCompression2(str));



var compress = function(chars) {
    let write = 0;
    let read = 0;
    
    while (read < chars.length) {
        const current = chars[read];
        let count = 0;
        
        while (read < chars.length && chars[read] === current) {
            read++;
            count++;
        }
        
        chars[write++] = current;
        
        if (count > 1) {
           
            for (const digit of String(count)) {
                chars[write++] = digit;
            }
        }
    }
    
    return write;
};


let chars =["a","a","b","b","c","c","c"]
// console.log(compress(chars))
console.log(stringCompression3(chars))






function stringCompression3(chars){
    let idx = 0;
    let i = 0;
    while(i<chars.length){
        const currentChar = chars[i];
        let count = 0;
        
        while(i<chars.length && currentChar == chars[i]){
            i++;
            count++;
        }
        chars[idx] = currentChar;
        idx++;

        if(count>1){
            for(let dig of String(count)){
                chars[idx] = dig;
                idx++;
            }
        }

    }
    return idx;
}