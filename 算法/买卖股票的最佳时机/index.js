// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
// 输入：[7,1,5,3,6,4]
// 输出：5

function findMaxProfit(prices){
    let maxProfit = 0;
    let minPrice = prices[0];
    
    for(let i = 1; i < prices.length; i++){
        const price = prices[i]
        if(price < minPrice){
            minPrice = price
        }else{
            maxProfit = Math.max(maxProfit, price-minPrice)
        }
    }
    return maxProfit
}

console.log(findMaxProfit([7,1,5,3,6,4]))

// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。然而，你可以在 同一天 多次买卖该股票，但要确保你持有的股票不超过一股。
// 返回 你能获得的 最大 利润 。
// 输入：prices = [7,1,5,3,6,4]
// 输出：7
// function findMaxProfitMax(arr){

//     let result = 0
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > arr[i-1]){
//             result += arr[i] - arr[i-1]
//         }
//     }
//     return result
// }
// console.log(findMaxProfitMax([7, 1, 5, 3, 6, 4]));