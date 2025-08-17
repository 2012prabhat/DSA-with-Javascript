function stringCompression(chars){
    let count = {}
    for(let i=0;i<chars.length;i++){
        count[chars[i]] = (count[chars[i]] || 0 ) + 1;
    }
    let finalStr = '';
    for(let char in count){
        if(count[char] === 1){
            finalStr += char;
        }else{
            finalStr += char + count[char];
        }
    }
    return finalStr.split('')
}


let chars = ["a","a","b","b","c","c","c"]
console.log(stringCompression(chars))