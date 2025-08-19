function isFreqSame(freq, winFreq){
    for(let i=0;i<freq.length;i++){
        if(freq[i] !== winFreq[i]){
            return false;
        }
    }
    return true;
}

function permutationString(str1, str2) {
  let freq = new Array(26).fill(0);
  for (let i = 0; i < str1.length; i++) {
    let chIdx = str1.charCodeAt(i) - "a".charCodeAt(0);
    freq[chIdx]++;
  }
  const windSize = str1.length;
  for (let i = 0; i < str2.length; i++) {
    let winIdx = 0;
    let idx = i;
    let winFreq = new Array(26).fill(0);

    while (winIdx < windSize && idx < str2.length) {
      let windChar = str2.charCodeAt(idx) - "a".charCodeAt(0);
      winFreq[windChar]++;
      winIdx++;
      idx++;
    }

    if(isFreqSame(freq, winFreq)){
        return true;
    }
  }

  return false;
}

console.log(permutationString("ab", "eidbawooo"));
