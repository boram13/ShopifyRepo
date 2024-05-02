function isPalindrome(str) {
    const length = str.length;
    
    for (let i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - 1 - i]) {
            return false;
        }
    }
    
    return true;
}

const str1 = 'radar'
const str2 = 'racecar'
const str3 = 'rotator'
const str4 = 'as sdfg gfds sa'
const str5 = 'not a palindrome'
console.log(isPalindrome(str1))
console.log(isPalindrome(str2))
console.log(isPalindrome(str3))
console.log(isPalindrome(str4))
console.log(isPalindrome(str5))