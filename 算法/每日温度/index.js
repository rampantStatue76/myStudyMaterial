var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const result = new Array(n).fill(0);
  const stack = []; // 存储索引的栈

  for (let i = 0; i < n; i++) {
    // 当当前温度大于栈顶索引对应的温度时
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop();
      result[prevIndex] = i - prevIndex; // 计算天数差
    }
    stack.push(i); // 将当前索引入栈
  }
  console.log(stack);
  return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
console.log(0.1+0.2 === 0.3);
