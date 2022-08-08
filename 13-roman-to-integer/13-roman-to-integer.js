/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      if (s[i + 1] === "V" || s[i + 1] === "X") {
        count -= 1;
      } else {
        count += 1;
      }
    }

    if (s[i] === "V") {
      count += 5;
    }

    if (s[i] === "X") {
      if (s[i + 1] === "L" || s[i + 1] === "C") {
        count -= 10;
      } else {
        count += 10;
      }
    }

    if (s[i] === "L") {
      count += 50;
    }

    if (s[i] === "C") {
      if (s[i + 1] === "D" || s[i + 1] === "M") {
        count -= 100;
      } else {
        count += 100;
      }
    }

    if (s[i] === "D") {
      count += 500;
    }

    if (s[i] === "M") {
      count += 1000;
    }
  }

  return count;
    
};