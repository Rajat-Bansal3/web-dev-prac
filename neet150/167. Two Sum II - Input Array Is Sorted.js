var twoSum = function (numbers, target) {
  // // approach 1
  // if (numbers.length == 0) return []
  // const map = new Map();
  // for (let i = 0; i < numbers.length; i++) {
  //     const temp = target - numbers[i];
  //     if (map.has(temp)) {
  //         return [map.get(temp), i];
  //     } else {
  //         map.set(numbers[i], i);
  //     }
  // }
  // return [];
  // // approach 2
  //   let l = 0;
  //   let r = numbers.length - 1;
  //   while (l < r) {
  //     if (numbers[l] + numbers[r] == target) {
  //       return [l+1, r+1];
  //     } else if (numbers[l] + numbers[r] > target) {
  //       r--;
  //     } else {
  //       l++;
  //     }
  //   }
  //   return []
};

const numbers = [2, 3, 4];
const target = 6;
console.log(twoSum(numbers, target));
