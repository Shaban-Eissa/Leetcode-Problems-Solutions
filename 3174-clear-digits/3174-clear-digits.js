/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (Number.isInteger(Number(s[i]))) {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
};

console.log(clearDigits("abc"));
console.log(clearDigits("a1b2c3"));
console.log(clearDigits("a123b456c789d0"));
