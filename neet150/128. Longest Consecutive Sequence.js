const nums = [1,2,0,1];

var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  nums.sort((a, b) => a - b);
  let res = 1;
  let curr = 1;
  for (var i = 1; i < nums.length; i++) {
    if( nums[i] === nums[i - 1]){
        continue
    }
    if (nums[i] === nums[i - 1] + 1) {
        
      curr++;
      res = Math.max(curr, res);
      curr = 1;
    }
  }
  return Math.max(res, curr);
};
console.log(longestConsecutive(nums));
