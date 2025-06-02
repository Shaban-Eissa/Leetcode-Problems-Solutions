/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let stack = [];
  let result = 0;
  let number = 0;
  let sign = 1;  

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    
    if (isDigit(char)) {
      number = number * 10 + parseInt(char);
    } else if (char === '+') {
      result += sign * number;
      number = 0;
      sign = 1;
    } else if (char === '-') {
      result += sign * number;
      number = 0;
      sign = -1;
    } else if (char === '(') {
      stack.push(result);
      stack.push(sign);
      result = 0;
      sign = 1;
    } else if (char === ')') {
      result += sign * number;
      number = 0;
      result *= stack.pop();
      result += stack.pop();
    }
  }
  
  if (number !== 0) {
    result += sign * number;
  }
  
  return result;
};

function isDigit(char) {
  return char >= '0' && char <= '9';
}

console.log(calculate("1 + 1"));
console.log(calculate("2-1+2"));
console.log(calculate("(1+(4+5+2)-3)+(6+8)"));