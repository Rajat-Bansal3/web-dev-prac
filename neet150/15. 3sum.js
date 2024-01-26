var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length-2; i++) {
    if(nums[i] > 0) break
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const currSum = nums[i] + nums[l] + nums[r];
      if (currSum == 0) {
        result.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;

        l++;
        r--;
      } else if (currSum < 0) l++;
      else r--;
    }
  }
  return result
};

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
