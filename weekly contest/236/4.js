/**
 * @param {number} m
 * @param {number} k
 */
var MKAverage = function (m, k) {
  this.m = m;
  this.k = k;
  this.elements = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MKAverage.prototype.addElement = function (num) {
  this.elements.push(num);
};

/**
 * @return {number}
 */
MKAverage.prototype.calculateMKAverage = function () {
  if (this.elements.length < this.m) {
    return -1;
  }
  var len = this.elements.length;
  var arr = this.elements.slice(len - this.m).sort((a, b) => a - b);
  var nums = [];
  if (this.k * 2 < this.m) {
    nums = arr.slice(this.k, arr.length - this.k);
  }

  if (nums.length === 0) return 0;
  var sum = nums.reduce((res, num) => (res += num), 0);
  return Math.floor(sum / nums.length);
};
