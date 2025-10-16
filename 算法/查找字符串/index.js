// 二分查找

function findStr(str, target){
    str = str.sort((a,b) => a-b)
    console.log(str)
    const len = str.length
    let i = 0
    let j = len - 1
    while(i <= j){
        const mid = Math.floor((i + j)/2)
        if(str[mid] === target){
            return mid
        }else if(target > str[mid]){
            i++
        }else{
            j--
        }
    }
    return -1
}

console.log(findStr([1,3,2,4],4))