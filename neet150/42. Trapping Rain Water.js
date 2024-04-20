var trap = function (height) {
  let l = 0;
  let r = height.length - 1;
  let rightMax = height[r];
  let leftMax = height[l];
  let result = 0
  while (l < r) {
    if (height[l] < height[r]) {
      if (height[l] > leftMax) {
        leftMax = height[l];
      }else{
        result += leftMax - height[l]
      }
      l++
    } else {
        if(height[r] > rightMax) {
            rightMax = height[r];
        }else{
            result += rightMax - height[r]
        }

        r--       
    }
  }
  return result
};
const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));

{
  /*Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.


Input: height = [4,2,0,3,2,5]
Output: 9

*/
}
