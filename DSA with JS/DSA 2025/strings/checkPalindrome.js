function isPalindrome(str) {
    let cleaned = "";
    // Step 1: Normalize and clean the string (lowercase + alphanumeric only)
    for (const char of str.toLowerCase()) {
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            cleaned += char;
        }
    }
    
    // Step 2: Two-pointer palindrome check
    let left = 0;
    let right = cleaned.length - 1;
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false; // Early exit if mismatch
        }
        left++;
        right--;
    }
    return true; // All characters matched
}

// Example Usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("Race a car")); // false
console.log(isPalindrome("12321"));      // true
console.log(isPalindrome("No 'x' in Nixon")); // true