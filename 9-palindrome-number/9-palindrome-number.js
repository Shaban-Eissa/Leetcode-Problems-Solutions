/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const isNegative = x < 0 ? true : false;

  if (isNegative) {
    return false;
  }

  const temp = x;
  let reversed = 0;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = parseInt(x / 10);
  }

  return reversed == temp;
    
};