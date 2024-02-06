var lengthOfLongestSubstring = function(s) {
    const x = new Map()
    for(let i = 0; i < s.length;i++) {
        const curr = s[i]
        if(x.has(curr)) {
            continue
        }x.set(curr,i)

    }    
    return Array.from(x.values()).filter((value, index, array)=>{ return index === 0 || value === array[index - 1] + 1; })
};

const s = "abcabcbbkjsab vcja"
console.log(lengthOfLongestSubstring(s))