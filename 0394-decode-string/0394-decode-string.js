/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let countStack = [],
    stringStack = [],
    currentString = "",
    k = 0;
  for (let char of s) {
    if (!isNaN(char)) {
      k = k * 10 + Number(char);
    } else if (char === "[") {
      countStack.push(k);
      stringStack.push(currentString);
      currentString = "";
      k = 0;
    } else if (char === "]") {
      currentString =
        stringStack.pop() + currentString.repeat(countStack.pop());
    } else {
      currentString += char;
    }
  }
  return currentString;
};
