var maxArea = function(height) {
    let l = 0
    let r = height.length - 1
    let maxWater = 0
    while(l < r){
        const left = height[l]
        const right = height[r]
        const width = r-l
        const minHeight = Math.min(left,right)
        maxWater = Math.max(maxWater,minHeight*width)
        // l++;r--
        if(left > right) r--
        else l++;
    }
    return maxWater
};
const height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height))