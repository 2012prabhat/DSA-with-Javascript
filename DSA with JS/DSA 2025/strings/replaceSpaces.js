
function replaceSpaces(str, replaceBy){
    let strArr = str.split('');
    for(let i=0;i<strArr.length;i++){
        if(strArr[i] === " "){
            strArr[i] = replaceBy;
        }
    }
    return strArr.join('');
}

console.log(replaceSpaces("test test","@"))