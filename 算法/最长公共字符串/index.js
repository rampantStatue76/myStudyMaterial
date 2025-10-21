const findLongestCommonPrefix = (strs) => {
    if (strs.length === 0) return ''
    
    let prefix = strs[0]
    
    for (let i = 1; i < strs.length; i++) {
        // 不断缩短前缀直到匹配当前字符串
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0,-1)
            if (prefix === '') return ''
        }
    }
    
    return prefix
}

const arr = ['hello','heo1dadad','helo2','hello3']
console.log('最长公共前缀:', findLongestCommonPrefix(arr)) // 输出: 'he'