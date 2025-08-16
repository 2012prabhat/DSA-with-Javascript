// Maximum Occuring character 

console.log(getMaxOccuringChar("abracadabra")); // Output: 'a'
console.log(getMaxOccuringChar("hello"));       // Output: 'l'
console.log(getMaxOccuringChar("aabbcc"));      // Output: 'a'

function getMaxOccuringChar(str){
    let count = {};
    for(let i=0 ; i<str.length;i++){
        let char = str.charAt(i);
        if(count[char]) count[char] += 1;
        else count[char] = 1;
    }

    let maxCount = 0;
    let maxChar = '';
    // console.log(count)
   for(let char in count){
        if(count[char] > maxCount){
            maxCount = count[char];
            maxChar = char;
        }else if (count[char] === maxCount && char < maxChar) {
            maxChar = char;
        }
   }

   return maxChar
}

