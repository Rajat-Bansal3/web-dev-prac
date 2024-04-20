const nums = [1,1,1,2,2,3]
const k =2
var topKFrequent = function(nums, k) {
    let res={}
    for(const el of nums){
        if(res[el]){
            res[el] += 1
        }else{
            res[el] = 1
        }
    }
    res = Object.entries(res).sort((a,b)=>b[1] - a[1])
    res = res.slice(0,k)
    res = res.map(x=>parseInt(x[0]))
    return res
};
console.log(topKFrequent(nums,k))