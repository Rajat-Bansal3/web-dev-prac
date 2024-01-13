const nums = [1, 2, 3, 4, 5];
const target = 10
function twoSum(nums , target){
    const cMap = new Map();

    for(let i = 0; i < nums.length; i++){
        const toFind = target - nums[i];
        if(cMap.has(toFind)){
            return [cMap.get(toFind) , i]
        }
        cMap.set(nums[i] , i)
    }
    return []
}

console.log(twoSum(nums , target))