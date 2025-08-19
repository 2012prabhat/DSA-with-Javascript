function removeDuplicates(str) {
  let result = "";
  let lastChar = "";
  for (const char of str) {
    
    if (char === lastChar) {
      // If current character is same as last, remove the last character from result
      
      result = result.slice(0, -1);
      
      // Update lastChar to the new last character in result
      lastChar = result.length > 0 ? result[result.length - 1] : "";
    } else {
      result += char;
      
      lastChar = char;
    }
  }
  return result;
}

console.log(removeDuplicates("abbaca"));



