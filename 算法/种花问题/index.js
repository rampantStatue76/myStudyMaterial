// 假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

// 给你一个整数数组 flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false 。

// 示例 1：

// 输入：flowerbed = [1,0,0,0,1], n = 1
// 输出：true
// 示例 2：

// 输入：flowerbed = [1,0,0,0,1], n = 2
// 输出：false
var canPlaceFlowers = function (flowerbed, n) {
    const len = flowerbed.length
    let count = 0
    for(let i = 0; i < flowerbed.length; i++){
        if(len === 1){
            if(flowerbed[0] === 0){
                count = 1
            }
            return count >= n
        }
        if(i === 0){
            if (flowerbed[1] === 0 && flowerbed[0] === 0){ 
                count++;
                flowerbed[i] = 1
            }
        }else if (i === flowerbed.length - 1) {
          if (flowerbed[len - 2] === 0 && flowerbed.at(-1) === 0){
            count++;
            flowerbed[i] = 1
          }
        } else {

          if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0 && flowerbed[i] === 0) {
            count++;
          };
          flowerbed[i] = 1
        }
    }
    // return count;
    return count >= n
};
console.log(canPlaceFlowers([1,0,0,0,1],2));
