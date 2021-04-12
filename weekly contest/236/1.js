/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let flag = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return 0;
    }
    if (nums[i] < 0) {
      flag += 1;
    }
  }
  return flag % 2 === 0 ? 1 : -1;
};
