function removeAllOccurence(str, part) {
  for (let i = 0; i < str.length; i++) {
    let sub = str.substring(i, i + part.length);
    if (sub === part) {
        str = str.slice(0,i) + str.slice(i+part.length,str.length);
        i = i - part.length;
    }
  }
  return str
}
let str = "daabcbaabcbc";
// let str = "daabcrt";
let part = "abc";
console.log(removeAllOccurence1(str, part));



// better approach (faster than upper)
function removeAllOccurence1(str,part){
    
    while(str.length>0 && str.indexOf(part) !== -1){
        let subIdx = str.indexOf(part);
        str = str.slice(0,subIdx) + str.slice(subIdx+part.length,str.length);
    }
    return str;
}
