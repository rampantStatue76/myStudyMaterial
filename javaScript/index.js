var moveZeroes = function (nums) {
  let nonZeroIndex = 0;

  // 第一次遍历：将所有非零元素移到前面
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  // 第二次遍历：将剩余位置填充为零
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
// console.log(moveZeroes([0, 1, 1, 0, 1]));
