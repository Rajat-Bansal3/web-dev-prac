let nums = [1,1,1,3,3,4,3,2,4,2]

function containDuplicates(nums) {
  return new Set(nums).size !== nums.length
}

console.log(containDuplicates(nums));
