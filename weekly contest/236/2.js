/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  if (n === 1) return 1;

  var array = [];
  for (var i = 1; i <= n; i++) {
    array.push(i);
  }

  function loop(arr) {
    if (arr.length === 1) {
      return arr[0];
    }
    var index = k % arr.length;
    if (index === 0) {
      return loop(arr.slice(0, arr.length - 1));
    } else {
      return loop(arr.slice(index).concat(arr.slice(0, index - 1)));
    }
  }
  return loop(array.slice(k).concat(array.slice(0, k - 1)));
};
