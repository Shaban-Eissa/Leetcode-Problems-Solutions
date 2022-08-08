/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     var stack = [];
  for (let i = 0; i < s.length; i++) {
    var current = s[i];

    switch (current) {
      case "(":
        stack.push(")");
        break;

      case "{":
        stack.push("}");
        break;

      case "[":
        stack.push("]");
        break;

      default:
        if (current !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};