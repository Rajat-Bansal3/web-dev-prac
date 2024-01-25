var productExceptSelf = function(nums) {
    const leftProd = Array(nums.length).fill(1);
    const rightProd = Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        leftProd[i] = leftProd[i - 1] * nums[i - 1];
    }

    console.log(leftProd)

    for (let i = nums.length - 2; i >= 0; i--) {
        rightProd[i] = rightProd[i + 1] * nums[i + 1];
    }
    console.log(rightProd)

    const res = [];
    for (let i = 0; i < nums.length; i++) {
        res[i] = leftProd[i] * rightProd[i];
    }

    return res;
};
console.log(productExceptSelf([1,2,3,4,5]))