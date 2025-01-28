function isPalindrome(str) {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}
function longestPalindromicSubString(s){
    let maxlength = 0;
    let longest = "";

    for(let i = 0; i < s.length; i++){
        for(let j = i; j < s.length; j++){
            let substring = s.substring(i, j+1);
            if(isPalindrome(substring) && substring.length > maxlength){
                maxlength = substring.length;
                longest = substring;
            }
        }
    }
    return longest;
}

console.log(longestPalindromicSubString("babad"));
