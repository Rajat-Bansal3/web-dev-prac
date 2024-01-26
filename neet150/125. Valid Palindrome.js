var isPalindrome = function (s) {
  const reg = /[^a-zA-Z0-9]/g;
  const parsedString = s.replace(reg, "").toLowerCase();
  // first approach
  return parsedString.split("").reverse().join("") === parsedString;

  //  // second approch
  //   let left = 0;
  //   let right = parsedString.length - 1;
  //   while (left < right) {
  //     if (parsedString[left] !== parsedString[right]) {
  //       return false;
  //     }
  //     left++;
  //     right--;
  //   }
  //   return true

  // //   third approach
  //   for (let i = 0, j = parsedString.length - 1; i < j; i++, j--) {
  //     if (parsedString[i] !== parsedString[j]) {
  //       return false;
  //     }
  //   }

  //   return true;
};
const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
